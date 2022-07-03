import React from 'react';

import { Layouts } from './Layout.style';

import Nav from 'components/Nav';

import { ILayout } from 'components/Layout/interface';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout: React.FC<ILayout> = ({ children }): React.ReactElement => {
  return (
    <Layouts>
      <Nav />

      {children}

      <ToastContainer />
    </Layouts>
  );
};

export default Layout;
