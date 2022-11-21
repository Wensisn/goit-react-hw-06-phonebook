import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { getVisibleContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getVisibleContacts);
  return (
    <div>
      <ContactForm />
      {contacts > 0 && <ContactsList />}
    </div>
  );
};
