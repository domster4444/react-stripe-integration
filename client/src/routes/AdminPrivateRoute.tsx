//? logic that is used to protect a route ,which can be accessed by only "admin" role
//? in this case whether he/she is customer

import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import isAuth from 'services/isAuth';

// resolve err "type 'undefined' is not assignable to type 'React.ReactElement'"
const AdminPrivateRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  if (isAuth() && isAuth().role === 'admin') {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default AdminPrivateRoute;
