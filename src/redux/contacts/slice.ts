import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../models/contacts';
import { updateValues } from '../../utils/utils';

const initialState: Contact[] = [];

export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    getContacts: (state, action: PayloadAction<Contact[]>) => {
      action.payload.forEach((contact: Contact) => {
        state.push(contact);
      });
    },
    createContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const change = state.find(
        (contact) => contact.id === action.payload.id
      ) as Contact;
      updateValues(change, action.payload);
    },
  },
});

export const { getContacts, createContact, editContact } = contactSlice.actions;

export default contactSlice.reducer;
