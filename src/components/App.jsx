import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import contacts from '../data/contacts.json';
import { useEffect, useState } from 'react';
const App = () => {
  const [allContacts, setAllContacts] = useState(() => {
    const savedData = localStorage.getItem('allContacts');
    if (savedData) {
      try {
        return JSON.parse(savedData);
      } catch (error) {
        console.error('Error parsing feedback from localStorage:', error);
        return contacts;
      }
    }
    return contacts;
  });

  const [filter, setFilter] = useState('');

  const foundContacts = allContacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  const deleteContact = contactId => {
    setAllContacts(prev => {
      return prev.filter(contact => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem('allContacts', JSON.stringify(allContacts));
  }, [allContacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={foundContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
