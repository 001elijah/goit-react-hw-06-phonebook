import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
  const contactsRedux = useSelector(state => state.contacts); // redux contacts

  const dispatch = useDispatch(); // redux filter
  const filterQueryRedux = useSelector(state => state.filter); // redux filter

  const filterContacts = () => {
    if (filterQueryRedux === '') return contactsRedux; // apply redux filter variable
    return contactsRedux.filter(contact => contact.name.toLowerCase().includes(filterQueryRedux.toLowerCase())); // apply redux filter variable
  };

return (
    <>
    <h1>☎️ Phonebook ☎️</h1>
    <ContactForm onSubmitProp={dispatch} />
    
    <h2>Contacts</h2>
    <Filter onChangeProp={dispatch}/>
    <ContactList contactsProp={filterContacts()} removeContact={dispatch}/>
    </>
);
};

export default App;