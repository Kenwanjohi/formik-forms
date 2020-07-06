import React from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup'
function App() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <div>
      <h1>forms with formik & yup validation & getFieldProps() </h1>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input name="firstName" {...formik.getFieldProps('firstName')} />
        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        <label htmlFor="lastName">Last Name</label>
        <input name= 'lastName' {...formik.getFieldProps('lastName')}/>
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor="email">Email</label>
        <input name="email" {...formik.getFieldProps('email')} />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;


