import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '@utils';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + '/auth',
    credentials: 'include',
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/login',
        body
      }),
    }),
    signup: build.mutation({
      query: (body) => ({
        method: 'POST',
        url: '/signup',
        body
      }),
    }),
    logout: build.mutation({
      query: () => ({
        method: 'POST',
        url: '/logout'
      }),
    })
  })
});

export const { useLoginMutation, useSignupMutation, useLogoutMutation } = authApi;