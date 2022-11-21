import css from './Contacts.module.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactsList = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul className={css.todoList}>
        <li key={id} className={css.todoList__item}>
          <p className={css.todoList__text}>{name}</p>
          <p className={css.todoList__text}>{number}</p>
          <button
            className={css.todoList__button}
            onClick={() => dispatch(deleteContact())}
          >
            Remove
          </button>
        </li>
      </ul>
    </>
  );
};
