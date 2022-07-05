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
  }),
});

export const { useGetAllPlansQuery } = stripeApi;
