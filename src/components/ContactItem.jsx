import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import css from './Contacts/Contacts.module.css';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li key={id} className={css.todoList__item}>
      <p className={css.todoList__text}>{name}</p>
      <p className={css.todoList__text}>{number}</p>
      <button
        className={css.todoList__button}
        onClick={() => dispatch(deleteContact({ id }))}
      >
        Remove
      </button>
    </li>
  );
};
