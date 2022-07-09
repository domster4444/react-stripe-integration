import React, { useEffect } from 'react';

import { useUpdateUserSubscriptionMutation } from 'redux/api/auth/stripeApi';
import { getDataByValue } from 'services/Cookie';
const PaymentSuccessPage = () => {
  const [updateUserSubscription, { isLoading }] =
    useUpdateUserSubscriptionMutation();

  const getUserSubscriptionStatus = async () => {
    const dataToSent = {
      token: getDataByValue('token'),
    };
    console.log('________________________--dataToSent____________');
    const res = await updateUserSubscription(dataToSent);
    console.log(res);
  };

  useEffect(() => {
    getUserSubscriptionStatus();
  }, []);
  return <h1>Loading ........</h1>;
};

export default PaymentSuccessPage;
