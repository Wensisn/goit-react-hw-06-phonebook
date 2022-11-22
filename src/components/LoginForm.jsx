import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import css from './ContactForm/Form.module.css';

export const LoginForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={css.sectionForm}>
      <h2>PhoneBook</h2>

      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.label} htmlFor={nameInputId}>
          <span className={css.name}>Name</span>
          <input
            className={css.input}
            type="text"
            name="name"
            required
            value={name}
            id={nameInputId}
            onChange={e => setName(e.currentTarget.value)}
          />
        </label>
        <label className={css.label} htmlFor={numberInputId}>
          <span className={css.name}>Number</span>
          <input
            className={css.input}
            type="tel"
            name="number"
            required
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            id={numberInputId}
            onChange={e => setNumber(e.currentTarget.value)}
          />
        </label>
        <button type="submit" className={css.click}>
          Add a contact
        </button>
      </form>
    </div>
  );
};
