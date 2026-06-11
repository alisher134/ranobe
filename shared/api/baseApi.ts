import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ENV } from '../config';

const baseQuery = fetchBaseQuery({
  baseUrl: ENV.apiUrl,
});

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({}),
});
