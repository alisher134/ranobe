import { baseApi } from '@/shared/api';
import { AuthResponse } from '../models/types';
import { SignInFormValues, SignUpFormValues } from '../models/schemas';
import { TokenService } from '@/shared/services';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, SignInFormValues>({
      query: (credentials) => ({
        url: '/auth/sign-in',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        TokenService.setTokens(data.accessToken, data.refreshToken);
      },
    }),
    signUp: builder.mutation<AuthResponse, SignUpFormValues>({
      query: (credentials) => ({
        url: '/auth/sign-up',
        method: 'POST',
        body: credentials,
      }),
      onQueryStarted: async (_, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        TokenService.setTokens(data.accessToken, data.refreshToken);
      },
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
