import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem';
import { getContacts, getFilter } from 'redux/selectors';
import { TodoList, TodoBoxs } from '../Contacts/Contacts.styled';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <TodoBoxs>
      <TodoList>
        {getVisibleContacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        ))}
      </TodoList>
    </TodoBoxs>
  );
};
