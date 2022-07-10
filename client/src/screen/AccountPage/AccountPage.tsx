import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { CgProfile } from 'react-icons/cg';

import styled from 'styled-components';
import { PrimaryButton } from 'components/Button/Button';

import Input from 'components/Input';
import Text from 'components/Text';

import { useGetUserProfileDataMutation } from 'redux/api/auth/authenticationApi';

import { getDataByValue } from 'services/Cookie';
import { getDataByObj } from 'services/LocalStorageService';

const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 8rem;
  margin: 2rem 0rem;
`;
const ProfileBox = styled.div`
  align-items: center;
  flex-direction: column;
  background: var(--secondary-navy);
  width: 40rem;
  @media (max-width: 500px) {
    min-width: 100vw;
  }
  padding: 1rem;
`;
const ProfileBoxContainer = styled.div`
  display: flex;

  justify-content: center;
`;
const AccountPage = () => {
  const [userSubscriptionData, setUserSubscriptionData] = React.useState<
    { data: any }[] | null
  >(null);

  const [name, setName] = React.useState<null | string>(null);
  const [email, setEmail] = React.useState<null | string>(null);

  const dataToSend = {
    id: getDataByObj('user')._id,
    token: getDataByValue('token'),
  };
  const [getUserProfileData, { isSuccess, isLoading, isError }] =
    useGetUserProfileDataMutation();

  useEffect(() => {
    const requestAllProfileData = async () => {
      const res = await getUserProfileData(dataToSend);
      setUserSubscriptionData(res.data.data.subscription);
      setName(res.data.data.name);
      setEmail(res.data.data.email);
    };
    requestAllProfileData();
  }, [getUserProfileData]);

  console.log(name);
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <ProfileBoxContainer>
      <ProfileBox>
        <IconContainer>
          <CgProfile />
        </IconContainer>

        <Text>AccountPage</Text>
        <br />

        {/* style attribute is our rest param */}
        <Text style={{ fontSize: '2.2rem', marginTop: '2rem' }}>Name</Text>

        <Input
          type="text"
          value={name ? name : ''}
          disabled
          style={{ color: '#c1c1c1' }}
        />
        <Text style={{ fontSize: '2.2rem', marginTop: '2rem' }}>Email</Text>
        <Input
          type="text"
          value={email ? email : ''}
          disabled
          style={{ color: '#c1c1c1' }}
        />
        <ProfileButtonContainer>
          <PrimaryButton style={{ width: '45%' }}>
            Access Plan Features
          </PrimaryButton>
          <PrimaryButton style={{ width: '45%' }}>Manage Plan</PrimaryButton>
        </ProfileButtonContainer>
        <Text style={{ fontSize: '2.2rem', marginTop: '2rem' }}>
          Subscriptions You have bought :-
        </Text>
        <hr />

        {userSubscriptionData && userSubscriptionData.length > 0 ? (
          userSubscriptionData[0].data.map((item: any, index: number) => {
            return (
              <div style={{ marginTop: '1rem', border: '1px solid white' }}>
                <Text style={{ fontSize: '2rem' }}>
                  {'Subscription Name : ' + item.plan.nickname}
                </Text>

                <Text style={{ fontSize: '2rem' }}>
                  {'Amount: ' + item.plan.amount / 100 + '$'}
                </Text>
                <Text style={{ fontSize: '2rem' }}>
                  {'STATUS:' + item.status}
                </Text>
                <Text style={{ fontSize: '2rem' }}>
                  {'Last 4 Digit : **** **** *** ***' +
                    item.default_payment_method.card.last4}
                </Text>
                <Text style={{ fontSize: '2rem' }}>
                  {'Expiry Date :  ' +
                    moment(item.current_period_end * 1000)
                      .format('dddd, MMMM Do YYYY h:mm:ss a')
                      .toString()}
                </Text>
                <br />
              </div>
            );
          })
        ) : (
          <Text>You have not bought any subscription</Text>
        )}
      </ProfileBox>
    </ProfileBoxContainer>
  );
};

export default AccountPage;
