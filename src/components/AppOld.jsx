import { Component } from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class App extends Component {
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
              {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
              {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
              {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
              
    filter: ''
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    parsedContacts && this.setState({ contacts: parsedContacts});
  };

  componentDidUpdate(prevProps, prevState) {
    if(this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  formSubmitHandler = contactData => {
    const found = this.state.contacts.find(contact => contact.name === contactData.name);
    if (found) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    };
    this.setState(prevState => ({ contacts: [...prevState.contacts, contactData] }));
  };

  filterQuery = query => {
    this.setState({filter: query});
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    if(filter === '') return contacts;
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLowerCase()));
  };

  removeContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };


  render() {
    const filteredContacts = this.filterContacts();
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmitProp={this.formSubmitHandler}/>
  
        <h2>Contacts</h2>
        <Filter onChangeProp={this.filterQuery}/>
        <ContactList contactsProp={filteredContacts} removeContact={this.removeContact}/>
      </>
    );
  };
};

export default App;