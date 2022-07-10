/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';

import { useUpdateUserSubscriptionMutation } from 'redux/api/auth/stripeApi';
import { getDataByValue } from 'services/Cookie';
import { useNavigate } from 'react-router-dom';
import { useGetUserProfileDataMutation } from 'redux/api/auth/authenticationApi';
import { getDataByObj } from 'services/LocalStorageService';
import { storeDataByObj } from 'services/LocalStorageService';

const PaymentSuccessPage: React.FC = () => {
  //? on purchase of new subscription we also need to update  localstorage session data of user
  //* get allProfileData then update localstorage session data of user (especially subscription value in lc)
  const [getUserProfileData] = useGetUserProfileDataMutation();
  useEffect(() => {
    const dataToSend = {
      id: getDataByObj('user')._id,
      token: getDataByValue('token'),
    };

    const requestAllProfileData = async () => {
      const res = await getUserProfileData(dataToSend);
      const dataToStoreInLC = {
        email: res.data.data.email,
        name: res.data.data.name,
        role: res.data.data.role,
        subscription: res.data.data.subscription,
        _id: res.data.data._id,
      };
      await storeDataByObj('user', dataToStoreInLC);
    };
    requestAllProfileData();
  }, []);
  //?________________________________________________________________

  const navigate = useNavigate();

  const [updateUserSubscription, { isLoading }] =
    useUpdateUserSubscriptionMutation();

  const getUserSubscriptionStatus = async () => {
    const dataToSent = {
      token: getDataByValue('token'),
    };
    //? checks if use is subscribed to any plans in stripe.com , if yes then update userModel's subscription field .
    const res = await updateUserSubscription(dataToSent);
    //? if user is subscribed to any plan, then redirect to account page else redirect to home page

    console.log(
      "🆗_____________user model's subscription field value___________ "
    );

    console.log(res.data.data.subscription[0].data);
    console.log(res.data.data.subscription[0].data);
    if (res.data.data.subscription[0].data.length > 0) {
      navigate('/account');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    getUserSubscriptionStatus();
  }, []);
  return <h1>Loading ........</h1>;
};

export default PaymentSuccessPage;
