import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Form.module.css';

function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [agree, setAgree] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        const contact = {
            id: uuidv4(),
            name,
            number,
        };
        onSubmit(contact);
        resetForm();
    };

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const handleAgreeChange = e => {
        setAgree(e.target.checked);
        // this.setState({ agree: e.target.checked });
    };

    const resetForm = () => {
        setName('');
        setNumber('');
        setAgree(false);
    };

    return (
        <div className={s.section__form}>
            <form className={s.form} onSubmit={handleSubmit}>
                <label className={s.label}>
                    Name
                    <input
                        className={s.inputName}
                        value={name}
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        onChange={handleChange}
                    />
                </label>

                <label className={s.label}>
                    Number
                    <input
                        className={s.inputName}
                        type="tel"
                        value={number}
                        name="number"
                        placeholder="Enter number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={handleChange}
                    />
                </label>
                <label className={s.label__agree}>
                    <input
                        className={s.checkbox}
                        value={agree}
                        type="checkbox"
                        name="agree"
                        checked={agree}
                        onChange={handleAgreeChange}
                    />
                    agree
                </label>

                <button className={s.btn} disabled={!agree}>
                    Add contact
                </button>
            </form>
        </div>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func,
    handleChange: PropTypes.func,
    handleAgreeChange: PropTypes.func,
    nameId: PropTypes.number,
    numberId: PropTypes.number,
    agreeId: PropTypes.number,
};

export default ContactForm;
