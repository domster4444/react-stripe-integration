import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const stripeApi: any = createApi({
  reducerPath: 'stripeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api/v1/',
  }),
  endpoints: (builder) => ({
    getAllPlans: builder.query({
      query: () => {
        return {
          url: 'plans',
          method: 'GET',
        };
      },
    }),

    addSubscriptionToUser: builder.mutation({
      query: (user) => {
        return {
          url: 'add-subscription-to-use',
          method: 'POST',
          body: user.planIdDataObj,
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user.token,
          },
        };
      },
    }),
  }),
});

export const { useGetAllPlansQuery, useAddSubscriptionToUserMutation } =
  stripeApi;
