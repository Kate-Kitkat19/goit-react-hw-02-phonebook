import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <Layout>
        <ContactForm></ContactForm>
      </Layout>
    );
  }
}
