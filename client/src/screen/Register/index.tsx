import React from 'react';

import { RegisterContainer, FormBox } from './Register.style';
import Text from 'components/Text';

import Input from 'components/Input';
import { PrimaryButton } from 'components/Button/Button';

import Alert from 'components/Alert';
import { toast } from 'react-toastify';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useVerifiedRegisterUserMutation } from '../../redux/api/auth/authenticationApi';

import { DataStorageMiddleware } from 'services/AuthStorageMiddleware';
import isAuth from 'services/isAuth';
import { Navigate, useNavigate } from 'react-router-dom';

const Index: React.FC = (): React.ReactElement => {
  interface apiResponseI {
    error?: {
      data: {
        success: boolean;
        message: string;
      };
      status: number;
    };
    data: {
      data: {
        _id: string;
        name: string;
        email: string;
      };
      message: string;
      success: boolean;
      token: string;
    };
  }

  //! RTK Generated Register Hook , "registerUser" is name of endpoint in userAuthApi.js
  const [verifiedRegisterUser, { isLoading }] =
    useVerifiedRegisterUserMutation();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(6).required('Required'),
    }),
    onSubmit: async (values) => {
      const dataToSend = {
        name: values.name,
        email: values.email,
        password: values.password,
      };

      //! User Register Using RTK Query Method
      const res: apiResponseI = await verifiedRegisterUser(dataToSend);

      if (res.error) {
        toast.error(res.error.data.message);
      }

      if (res.data) {
        toast.success(res.data.message);
      }
    },
  });

  return (
    <main>
      <RegisterContainer>
        {/*//! redirect if user tries to go to /login path forcefully after loggedin */}
        {isAuth() ? <Navigate to="/" /> : null}
        <FormBox onSubmit={formik.handleSubmit}>
          <Text>Register</Text>
          <label htmlFor="name">
            <Input
              {...formik.getFieldProps('name')}
              elementSize="small"
              placeholder="Enter your name"
              name="name"
              type="name"
            />

            {formik.errors.name && formik.touched.name ? (
              <Alert type="error">{formik.errors.name}</Alert>
            ) : null}
          </label>
          <label htmlFor="email">
            <Input
              {...formik.getFieldProps('email')}
              elementSize="small"
              placeholder="Enter your email"
              name="email"
              type="email"
            />

            {formik.errors.email && formik.touched.email ? (
              <Alert type="error">{formik.errors.email}</Alert>
            ) : null}
          </label>
          <label htmlFor="password">
            <Input
              {...formik.getFieldProps('password')}
              elementSize="small"
              placeholder="Enter your password"
              name="password"
              type="password"
            />

            {formik.errors.password && formik.touched.password ? (
              <Alert type="error">{formik.errors.password}</Alert>
            ) : null}
          </label>

          <PrimaryButton> Submit</PrimaryButton>
        </FormBox>
      </RegisterContainer>
    </main>
  );
};

export default Index;
