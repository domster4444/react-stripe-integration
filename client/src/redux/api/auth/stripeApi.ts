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

    //? sends request to route that will check if user with that customer_user_id has been subscribed with any plans in stripe.com , and if yes, then based on that subscription plan, it will update userModel's subscription field
    // call this route on success page , so that we can check if payment was successful (whether he/she has subscribed or not) and if yupToFormErrors,  then based on that subscription plan, it will update userModel's subscription field
    updateUserSubscription: builder.mutation({
      query: (user) => {
        return {
          url: 'update-user-subscription',
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + user.token,
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllPlansQuery,
  useAddSubscriptionToUserMutation,
  useUpdateUserSubscriptionMutation,
} = stripeApi;
