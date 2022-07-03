import React from 'react';

import Layout from 'components/Layout';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';

import Home from 'screen/Home';
import Login from 'screen/Login';
import Register from 'screen/Register';
import ActivateAccount from 'screen/ActivateAccount';
import ForgotPassword from 'screen/ForgotPassword';
import ResetPassword from 'screen/ResetPassword';

import LoggedInPrivateRoute from 'routes/LoggedInPrivateRoute';
import AnyLoggedInUserPage from 'screen/AnyLoggedInUserPage';
import CustomerPrivateRoute from 'routes/CustomerPrivateRoute';
import CustomerDashboard from 'screen/CustomerDashboard';
import AdminPrivateRoute from 'routes/AdminPrivateRoute';
import AdminDashboard from 'screen/AdminDashboard';

const AppRoutes: React.FC = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/activate-account/:token"
            element={<ActivateAccount />}
          />
          <Route path="/send-forgot-pass-email" element={<ForgotPassword />} />
          <Route
            path="/reset-password/:id/:token"
            element={<ResetPassword />}
          />
          {/* //? Catch all routes that are not defined above */}
          {/* //?  write this route at last after defining all routes */}
          <Route
            path="*"
            element={<h1 style={{ color: 'white ' }}>PAGE NOT FOUND</h1>}
          />

          {/* //*PRIVATE ROUTE */}

          <Route
            path="/any-logged-in-user"
            element={
              <LoggedInPrivateRoute>
                <AnyLoggedInUserPage />
              </LoggedInPrivateRoute>
            }
          />
          <Route
            path="/customer-private-page"
            element={
              <CustomerPrivateRoute>
                <CustomerDashboard />
              </CustomerPrivateRoute>
            }
          />

          <Route
            path="/admin-private-page"
            element={
              <AdminPrivateRoute>
                <AdminDashboard />
              </AdminPrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
