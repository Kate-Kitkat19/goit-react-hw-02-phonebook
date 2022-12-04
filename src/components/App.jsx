import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
  };

  saveContactInState = data => {
    this.setState(prevState => {
      const { contacts } = prevState;
      return { contacts: [...contacts, data] };
    });
  };

  render() {
    return (
      <Layout>
        <ContactForm
          saveContact={this.saveContactInState}
        ></ContactForm>
        {this.state.contacts.length > 0 ? (
          <Contacts contacts={this.state.contacts}></Contacts>
        ) : (
          'There are no contacts yet! Try to add some :)'
        )}
      </Layout>
    );
  }
}
