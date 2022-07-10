import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { PrimaryButton } from 'components/Button/Button';

import { PriceCardWrapper, PriceCardBox } from './PriceCard.style';

import {
  useGetAllPlansQuery,
  useAddSubscriptionToUserMutation,
} from 'redux/api/auth/stripeApi';
import { getDataByValue } from 'services/Cookie';
import isAuth from 'services/isAuth';

import { getDataByObj } from 'services/LocalStorageService';

export const PriceCardContainer = () => {
  const [alreadyBoughtSubscriptionList, setAlreadyBoughtSubscriptionList] =
    React.useState<string[]>([]);
  // for getting all product  plans like. plan nickname, plan id, etc
  const { isLoading, isError, isSuccess, data } = useGetAllPlansQuery();

  // for requesting to adding   subscription for user model by requresting  "add-subscription-to-use" by providing the "planId" of plan of which the "user" clicked the "buy button"
  const [addSubscriptionToUser, { isAddSubscriptionRequestComplete }] =
    useAddSubscriptionToUserMutation();

  useEffect(() => {
    const userLCData = getDataByObj('user');
    console.log('LOCALSTOEAGE DATA');

    const subscriptionList = userLCData.subscription[0].data.map(
      (item: any) => item.items.data[0]
    );
    const subscriptionNameList = subscriptionList.map(
      (item: any) => item.plan.nickname
    );
    console.log('subscriptionNameList', subscriptionNameList);
    setAlreadyBoughtSubscriptionList(subscriptionNameList);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const planList = data.data.data;
  // console.log("fetched available plans from stripe.com ", planList);

  return (
    <>
      <PriceCardWrapper>
        {planList.map((plan: any) => {
          if (alreadyBoughtSubscriptionList.includes(plan.nickname)) {
            return null;
          }
          return (
            <PriceCard
              key={plan.id}
              name={plan.nickname}
              price={plan.unit_amount / 100}
              handleSubscription={async () => {
                //? SENDING THIS TO SERVER , TO GET STRIPE CHECKOUT URL
                const dataToSend = {
                  planIdDataObj: {
                    planId: plan.id,
                  },
                  token: getDataByValue('token'),
                };
                const sessionData = await addSubscriptionToUser(dataToSend);
                console.log(sessionData.data.data.url);

                window.location.href = sessionData.data.data.url;
              }}
            />
          );
        })}
      </PriceCardWrapper>
    </>
  );
};

interface priceCard {
  name: string;
  price: number;
  handleSubscription: () => void;
}
export const PriceCard: React.FC<priceCard> = ({
  name,
  price,
  handleSubscription,
}) => {
  const isAuthenticated = isAuth();

  return (
    <>
      <PriceCardBox>
        <h2 className="poppins_regular">{name}</h2>
        <h2 className="poppins_regular">Buy For $ {price}</h2>
        {/* 
        <img
          src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        /> */}

        <PrimaryButton
          path={isAuthenticated ? undefined : '/login'}
          onClickProps={isAuthenticated ? handleSubscription : undefined}
        >
          {isAuthenticated ? 'buy' : 'signup'}
        </PrimaryButton>
      </PriceCardBox>
    </>
  );
};
