import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import {
  TodoItem,
  TodoText,
  TodoButton,
  TodoBoxs,
} from './Contacts/Contacts.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <TodoItem key={id}>
      <TodoText>{name}</TodoText>
      <TodoText>{number}</TodoText>
      <TodoButton onClick={() => dispatch(deleteContact({ id }))}>
        Remove
      </TodoButton>
    </TodoItem>
  );
};
