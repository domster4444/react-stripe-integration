import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authenticationApi: any = createApi({
  //unique string
  reducerPath: 'authenticationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/',
  }),
  // function that has different fetch method

  endpoints: (builder) => ({
    //? register user without verification of email
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: 'register',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),

    //?sends activation email
    verifiedRegisterUser: builder.mutation({
      query: (user) => {
        return {
          url: 'verified-register',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),

    //? accepts activation token
    createVerifiedEmailUser: builder.mutation({
      query: (user) => {
        return {
          url: 'create-account-for-email-verified',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user.token,
          },
        };
      },
    }),

    //? login
    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: 'login',
          method: 'POST',
          body: user,
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
});

// export generated hooks
export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useVerifiedRegisterUserMutation,
  useCreateVerifiedEmailUserMutation,
} = authenticationApi;
