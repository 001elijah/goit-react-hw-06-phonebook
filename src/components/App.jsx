import { useState, useEffect } from "react";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

const App = () => {
    const [contacts, setContacts] = useState(() =>
        JSON.parse(localStorage.getItem('contacts')) ?? []
    );
    const [filter, setFilter] = useState('');

    // const firstRenderRef = useRef(true); // first render check

    useEffect(() => {
        // if (firstRenderRef.current) { // first render check
        //     firstRenderRef.current = false;
        //     return;
        // };  
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

  const formSubmitHandler = contactData => {
    const found = contacts.find(contact => contact.name.toLowerCase() === contactData.name.toLowerCase());
    if (found) {
      alert(`${contactData.name} is already in contacts.`);
      return;
    };
    setContacts(prevContacts => [...prevContacts, contactData]);
  };

  const filterQuery = query => {
    setFilter(query);
  };

  const filterContacts = () => {
    if (filter === '') return contacts;
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLowerCase()));
  };

  const removeContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

return (
    <>
    <h1>☎️ Phonebook ☎️</h1>
    <ContactForm onSubmitProp={formSubmitHandler}/>

    <h2>Contacts</h2>
    <Filter onChangeProp={filterQuery}/>
    <ContactList contactsProp={filterContacts()} removeContact={removeContact}/>
    </>
);
};

export default App;