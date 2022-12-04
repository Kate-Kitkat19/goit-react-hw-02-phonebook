import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { Layout } from './Layout.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

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

  handleSubmit = (values, { resetForm }) => {
    console.log('values in handle Submit', values);
    const contactName = values.name.toLowerCase();
    const isSaved = this.state.contacts.find(
      contact => contact.name.toLowerCase() === contactName
    );
    console.log('App   isSaved', isSaved);
    if (isSaved) {
      alert(`${values.name} is already in contacts`);
    } else {
      this.saveContactInState({ ...values, id: nanoid() });
    }
    resetForm();
  };

  filterContacts = evt => {
    const value = evt.target.value;
    this.setState({ filter: value.trim().toLowerCase() });
  };

  deleteContact = id => {
    console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );

    return (
      <Layout>
        <ContactForm onSubmit={this.handleSubmit}></ContactForm>
        <Filter
          onFilterChange={this.filterContacts}
          filterValue={this.state.filter}
        ></Filter>

        {filteredContacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Contacts
              contacts={filteredContacts}
              onDelete={this.deleteContact}
            ></Contacts>
          </>
        )}
      </Layout>
    );
  }
}
