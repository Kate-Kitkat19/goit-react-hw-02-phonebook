import { Formik, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';
import { TiUser, TiPhone } from 'react-icons/ti';
import { Button } from './ContactForm.styled';
import { StyledForm, FormInput } from './ContactForm.styled';
import { ValidationSchema } from './Validation';

export class ContactForm extends Component {
  static propTypes = {
    saveContact: PropTypes.func.isRequired,
  };

  INITIAL_VALUES = {
    name: '',
    number: '',
  };

  handleSubmit = (values, { resetForm }) => {
    console.log('values in handle Submit', values);
    this.props.saveContact({ ...values, id: nanoid() });
    resetForm();
  };

  render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        validationSchema={ValidationSchema}
        initialValues={{ ...this.INITIAL_VALUES }}
      >
        <StyledForm>
          <label>
            Please write the name
            <TiUser></TiUser>
            <FormInput type="text" name="name"></FormInput>
            <ErrorMessage name="name"></ErrorMessage>
          </label>
          <label>
            Please write the phone number
            <TiPhone></TiPhone>
            <FormInput type="tel" name="number"></FormInput>
            <ErrorMessage name="number"></ErrorMessage>
          </label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}

export default ContactForm;
