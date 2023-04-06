import Contact from "components/Contact/Contact";
import PropTypes from 'prop-types';

import s from './ContactList.module.css';

const ContactList = ({contactsProp, removeContact}) => {
    return (
        <>
            {contactsProp.length !== 0 ? <ul className={s.List}>
                {contactsProp.map(contact => <Contact key={contact.id} contactProp={contact} removeContact={removeContact}/>)}
            </ul> : <p>Not found</p>}
        </>
    );
};

ContactList.propTypes = {
    contactsProp: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired
};

export default ContactList;