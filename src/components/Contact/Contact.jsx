import s from './Contact.module.css';
import { FaUserLarge } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.container}>
      <div className={s.info}>
        <div className={s.item}>
          <FaUserLarge />
          <p>{name}</p>
        </div>
        <div className={s.item}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.btn} onClick={() => handleDelete()}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
