import { ContactsList } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsFilter } from './StatusFilter/ContactsFilter';
export const App = () => {
  return (
    <div>
      <ContactForm />
      <ContactsFilter />
      <ContactsList />
    </div>
  );
};
