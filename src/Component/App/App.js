import { useState, useEffect } from 'react';
import s from './App.module.css';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import initialContacts from '../../initialContacts.json';

function App() {
    const [contacts, setContacts] = useState(() => {
        return JSON.parse(
            window.localStorage.getItem('contacts') ?? initialContacts,
        );
    });
    const [filter, setFilter] = useState('');

    useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const formSubmitHandler = data => {
        if (
            contacts.some(
                element =>
                    element.name.toLowerCase() === data.name.toLowerCase(),
            )
        ) {
            return alert('This contact has already been added to the list');
        }

        setContacts([data, ...contacts]);
    };

    const changeFilter = e => {
        setFilter(e.target.value);
    };

    const getVisibleContact = () => {
        const contactFilter = filter.toLowerCase();
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(contactFilter),
        );
    };

    const deleteContactList = contactId => {
        setContacts(contacts.filter(contact => contact.id !== contactId));
    };

    return (
        <Container>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm onSubmit={formSubmitHandler} />
            <h2 className={s.title}>Contacts</h2>
            <Filter filter={filter} onChange={changeFilter} />
            <ContactList
                contacts={getVisibleContact()}
                onDeleteContactList={deleteContactList}
            />
        </Container>
    );
}

export default App;
