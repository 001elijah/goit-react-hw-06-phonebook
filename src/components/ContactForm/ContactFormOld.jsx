import { Component } from "react";
import shortid from "shortid";

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value});
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.onSubmitProp({...this.state, id: shortid.generate()});
        this.reset();
    };

    reset() {
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">
                    Name<br />
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChange}
                    />
                </label><br /><br />
                <label htmlFor="">
                    Number<br />
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChange}
                    />
                </label><br /><br />
                <button type="submit">Add contact</button>
            </form>
        );
    };
};

export default ContactForm;