import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
  const contactsRedux = useSelector(state => state.contacts); // redux Contacts App state
  const dispatch = useDispatch(); // redux dispatch

  const filterContacts = () => {
    if (contactsRedux.filter === '') return contactsRedux.contacts; // apply redux filter variable
    return contactsRedux.contacts.filter(contact => contact.name.toLowerCase().includes(contactsRedux.filter.toLowerCase())); // apply redux filter variable
  };

  // const formSubmitHandler = contactData => {
  //   console.log(contactData)
  //   const found = contactsRedux.contacts.find(contact => contact.name.toLowerCase() === contactData.payload.name.toLowerCase());
  //   if (found) { //перевірку виніс із редьюсера в компонент, бо редьюсер запускається а потім дає задню
  //       alert(`${contactData.payload.name} is already in contacts.`);
  //     return;
  //   };
  // };
  const formSubmitHandler = (action) => {
    const found = contactsRedux.contacts.find(contact => contact.name.toLowerCase() === action.payload.name.toLowerCase());
            if (found) {
            alert(`${action.payload.name} is already in contacts.`);
            return;
            };
    return dispatch(action);
  };

return (
    <>
    <h1>☎️ Phonebook ☎️</h1>
    <ContactForm onSubmitProp={formSubmitHandler} />
    
    <h2>Contacts</h2>
    <Filter onChangeProp={dispatch}/>
    <ContactList contactsProp={filterContacts()} removeContact={dispatch}/>
    </>
);
};

export default App;