//? logic that is used to protect a route ,which can be accessed by all logged in user
//? whether he/she is customer or admin
//? no need to check role,it just checks if user is  available in localstorage

import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import isAuth from 'services/isAuth';

// resolve err "type 'undefined' is not assignable to type 'React.ReactElement'"
const LoggedInPrivateRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  if (!isAuth()) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default LoggedInPrivateRoute;
