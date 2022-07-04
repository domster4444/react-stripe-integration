import React from 'react';

import { Container, FormBox } from './ResetPassword.style';
import Text from 'components/Text';

import Input from 'components/Input';
import { PrimaryButton } from 'components/Button/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import Alert from 'components/Alert';

const Index = (): React.ReactElement => {
  interface valueI {
    password: string;
  }

  const { id, token } = useParams();
  console.log('token in param is ', token);

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values: valueI) => {
      alert('submitted');
      const passwordToBeSent = values.password;
      const idToBeSent = id;
      const tokenToBeSent = token;

      console.log('password submitted = ', passwordToBeSent);

      console.log('id submitted = ', idToBeSent);

      console.log('token submitted = ', tokenToBeSent);

      //send request to "changePasswordController" which checks if header token is correct or not,
      //  if correct,fetch _id from that token then change password using password value sent in body , and for user with that _id
    },
  });

  return (
    <main>
      <Container>
        <FormBox onSubmit={formik.handleSubmit}>
          <Text>Enter your new password to reset</Text>
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
      </Container>
    </main>
  );
};

export default Index;
