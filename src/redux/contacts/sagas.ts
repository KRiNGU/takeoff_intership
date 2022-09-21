import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as contactAPI from '../../api/contact';
import * as contactSlice from './slice';
import { Contact } from '../../models/contacts';
import {
  CreateContactSliceProps,
  UpdateContactSliceProps,
  GetContactsByOwnerIdSliceProps,
} from './types';

export function* updateContactWorker({
  payload: { id, contact },
}: UpdateContactSliceProps) {
  try {
    const response: AxiosResponse<Contact> = yield call(
      contactAPI.updateContactAPI,
      id,
      contact
    );

    const data: Contact = response.data;

    yield put(contactSlice.editContact(data));
  } catch (err) {
    console.error(err);
  }
}

export function* createContactWorker({
  payload: { contact },
}: CreateContactSliceProps) {
  try {
    const response: AxiosResponse<Contact> = yield call(
      contactAPI.createContactAPI,
      contact
    );

    const data: Contact = response.data;

    yield put(contactSlice.createContact(data));
  } catch (err) {
    console.error(err);
  }
}

export function* getContactsByOwnerIdWorker({
  payload: { ownerId },
}: GetContactsByOwnerIdSliceProps) {
  try {
    const response: AxiosResponse<Contact[]> = yield call(
      contactAPI.getContactsByOwnerIdAPI,
      ownerId
    );

    const data: Contact[] = response.data;

    yield put(contactSlice.getContacts(data));
  } catch (err) {
    console.error(err);
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_CONTACTS', getContactsByOwnerIdWorker);
  yield takeLatest('CREATE_CONTACT', createContactWorker);
  yield takeLatest('UPDATE_CONTACT', updateContactWorker);
}
