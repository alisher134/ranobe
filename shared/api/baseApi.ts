import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { ENV, PATHS } from '../config';
import { TokenService } from '../services';
import { Mutex } from 'async-mutex';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: ENV.apiUrl,
  prepareHeaders: (headers) => {
    const token = TokenService.getAccessToken();
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const AUTH_ENDPOINTS = [
  '/auth/sign-in',
  '/auth/sign-up',
  '/auth/refresh-token',
];

function shouldAttemptRefresh(
  args: string | FetchArgs,
  error: FetchBaseQueryError,
): boolean {
  if (error.status !== 401) {
    return false;
  }

  const url = typeof args === 'string' ? args : args.url;

  return !AUTH_ENDPOINTS.some((endpoint) => url.startsWith(endpoint));
}

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, store, extraOptions) => {
  await mutex.waitForUnlock();

  let result = await baseQuery(args, store, extraOptions);

  if (result.error && shouldAttemptRefresh(args, result.error)) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();

      try {
        const refreshToken = TokenService.getRefreshToken();
        if (!refreshToken) {
          TokenService.clearTokens();
          window.location.href = PATHS.signIn;
          return result;
        }

        const refreshResult = await baseQuery(
          {
            url: '/auth/refresh-token',
            method: 'POST',
            body: { refreshToken },
          },
          store,
          extraOptions,
        );

        if (refreshResult.data) {
          const data = refreshResult.data as {
            accessToken: string;
            refreshToken: string;
          };

          TokenService.setTokens(data.accessToken, data.refreshToken);
          result = await baseQuery(args, store, extraOptions);
        } else {
          TokenService.clearTokens();
          if (typeof window !== undefined) window.location.href = PATHS.signIn;
          return result;
        }
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, store, extraOptions);
    }
  }
  return result;
};

export const baseApi = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
