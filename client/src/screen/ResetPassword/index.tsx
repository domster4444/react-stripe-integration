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
  const { token } = useParams();
  console.log('token in param is ', token);

  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Required'),
    }),
    onSubmit: (values) => {
      toast('Logged In Successfully');
      console.log(values);
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
