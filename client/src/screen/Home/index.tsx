import React from 'react';
import Layout from 'components/Layout';
import isAuth from 'services/isAuth';

import { PriceCardContainer } from 'components/PriceCard/PriceCard';

const index = () => {
  return (
    <h1>
      <PriceCardContainer />
    </h1>
  );
};

export default index;
