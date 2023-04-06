import shortid from "shortid";
import { useState } from "react";

import s from './ContactForm.module.css'

const ContactForm = ({ onSubmitProp }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = evt => {
        evt.target.name === 'name' ?
        setName(evt.target.value) :
        setNumber(evt.target.value);
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        onSubmitProp({name, number, id: shortid.generate()});
        reset();
    };

    return (
        <form className={s.Form} onSubmit={handleSubmit}>
            <label htmlFor="">
                Name:<br />
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label><br /><br />
            <label htmlFor="">
                Number:<br />
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label><br /><br />
            <button className={s.Button} type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;