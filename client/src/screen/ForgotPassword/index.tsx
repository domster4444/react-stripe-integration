import React from 'react';

import { Container, FormBox } from './ForgotPassword.style';
import Text from 'components/Text';

import Input from 'components/Input';
import { PrimaryButton } from 'components/Button/Button';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import Alert from 'components/Alert';

const Index = (): React.ReactElement => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
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
          <Text>We will send you email </Text>
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

          <PrimaryButton> Submit</PrimaryButton>
        </FormBox>
      </Container>
    </main>
  );
};

export default Index;
