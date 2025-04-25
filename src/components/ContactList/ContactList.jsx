import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filters.filters.name);
  const filteredData = contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <ul className={s.list}>
        {filteredData.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
