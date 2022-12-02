import { Formik, Form, Field } from 'formik';
import React, { Component } from 'react';
import * as Yup from 'yup';

export class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    number: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });
  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(typeof values.number);
        }}
        validationSchema={this.validationSchema}
      >
        <Form>
          <Field type="text" name="name" required></Field>
          <Field type="tel" name="number"></Field>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    );
  }
}

export default ContactForm;
