import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../../models/contacts';

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
  },
});

export const { getContacts, createContact } = contactSlice.actions;

export default contactSlice.reducer;
