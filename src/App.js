import React from 'react';
import {useFormik} from 'formik'
import Withyup from './withyup'
import WithFormik from './withFormik'
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};




function App() {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  })

  return (
    <div>
      <h1>forms with formik & custom validation</h1>
      <form onSubmit={formik.handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input
          value = {formik.values.firstName}
          onChange = {formik.handleChange}
          onBlur={formik.handleBlur}
          type = 'text'
          name= 'firstName'
          id = 'firstName'
        />
        <input name="firstName" {...formik.getFieldProps('firstName')} />
        {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        {/* //formik.errors is populated via the custom validation function */}
        <label htmlFor="lastName">Last Name</label>
        <input
          value = {formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange = {formik.handleChange}
          type = 'text'
          name= 'lastName'
          id = 'lastName'
        />
        {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
        <label htmlFor="email">Email</label>
        <input
          value = {formik.values.email}
          onBlur={formik.handleBlur}
          onChange = {formik.handleChange}
          type = 'email'
          name= 'email'
          id = 'email'
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <button type='submit'>Submit</button>
      </form>
      <Withyup/>
      <WithFormik/>
    </div>
  );
}

export default App;


