import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for we

const tasksInitialState = [
  // {
  //   id: nanoid(1),
  //   name: 'Rosie Simpson',
  //   number: '4591156',
  // },
  // {
  //   id: nanoid(1),
  //   name: 'Hermione Kline',
  //   number: '4591256',
  // },
  // {
  //   id: nanoid(1),
  //   name: 'Eden Clements',
  //   number: '4591356',
  // },
  // {
  //   id: nanoid(1),
  //   name: 'Annie Copeland',
  //   number: '4591456',
  // },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(1),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

const persistConfig = {
  key: 'items',
  storage,
};

const contactReducer = persistReducer(persistConfig, contactSlice.reducer);

export default contactReducer;
