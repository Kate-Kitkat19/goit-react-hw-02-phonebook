import { Formik, ErrorMessage } from 'formik';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Button } from './ContactForm.styled';
import { StyledForm, FormInput, Label } from './ContactForm.styled';
import { ValidationSchema } from './Validation';

export class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  INITIAL_VALUES = {
    name: '',
    number: '',
  };

  render() {
    return (
      <Formik
        onSubmit={this.props.onSubmit}
        validationSchema={ValidationSchema}
        initialValues={{ ...this.INITIAL_VALUES }}
      >
        <StyledForm>
          <Label>
            Please write the name
            <FormInput type="text" name="name"></FormInput>
            <ErrorMessage name="name"></ErrorMessage>
          </Label>
          <Label>
            Please write the phone number
            <FormInput type="tel" name="number"></FormInput>
            <ErrorMessage name="number"></ErrorMessage>
          </Label>
          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    );
  }
}

export default ContactForm;
