import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './StatusFilter/ContactsFilter';

import { getVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  return (
    <div>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
