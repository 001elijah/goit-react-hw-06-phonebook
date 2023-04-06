import PropTypes from "prop-types";

import s from './Contact.module.css';

const Contact = ({ contactProp, removeContact }) => {
    return (
        <li className={s.Item}>
            <span>{contactProp.name}: </span><span>{contactProp.number} </span>
            <button className={s.Button} type="button" onClick={() => removeContact(contactProp.id)}>Delete</button>
        </li>
    );
};

Contact.propTypes = {
    contactProp: PropTypes.object.isRequired
};

export default Contact;