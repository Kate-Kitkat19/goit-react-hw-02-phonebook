import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  saveContactInState = data => {
    this.setState(prevState => {
      const { contacts } = prevState;
      return { contacts: [...contacts, data] };
    });
  };

  filterContacts = evt => {
    const value = evt.target.value;
    console.log('App   value', value);
    this.setState({ filter: value.trim().toLowerCase() });
    const filteredContacts = this.state.contacts.filter(contact => {
      const normalizedName = contact.name.toLowerCase();
      const filter = normalizedName.includes(this.state.filter);
      return filter;
    });
    console.log('App   filteredContacts', filteredContacts);
  };

  render() {
    return (
      <Layout>
        <ContactForm saveContact={this.saveContactInState}></ContactForm>
        <Filter
          filterFnc={this.filterContacts}
          filterValue={this.state.filter}
        ></Filter>
        {this.state.contacts.length > 0 ? (
          <Contacts contacts={this.state.contacts}></Contacts>
        ) : (
          'There are no contacts yet! Try to add some :)'
        )}
      </Layout>
    );
  }
}
