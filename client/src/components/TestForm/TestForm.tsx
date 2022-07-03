import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

const TestForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.number().min(6).required('Required'),
    }),
    onSubmit: (values) => {
      alert('form data logged in console');
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <header>
        <h1>Test Form</h1>
      </header>
      <label
        htmlFor="
        "
      >
        email
        <input type="text" id="email" {...formik.getFieldProps('email')} />
        {formik.errors.email && formik.touched.email ? (
          <div>
            <mark>{formik.errors.email}</mark>
          </div>
        ) : null}
      </label>

      <br />
      <label
        htmlFor=" 
          "
      >
        password in number
        <input
          type="text"
          id="password"
          {...formik.getFieldProps('password')}
        />
        {formik.errors.password && formik.touched.password ? (
          <div>
            <mark>{formik.errors.password}</mark>
          </div>
        ) : null}
      </label>

      <br />
      <label
        htmlFor="
          "
      >
        name in string
        <input type="text" id="name" {...formik.getFieldProps('name')} />
        {formik.errors.name && formik.touched.name ? (
          <div>
            <mark>{formik.errors.name}</mark>
          </div>
        ) : null}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default TestForm;
