import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './StatusFilter/ContactsFilter';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div>
      <ContactForm />
      {contacts.length > 0 && <ContactsFilter />}
      <ContactsList />
    </div>
  );
};
