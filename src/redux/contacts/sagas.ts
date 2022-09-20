import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as contactAPI from '../../api/contact';
import * as contactSlice from './slice';
import { Contact } from '../../models/contacts';
import {
  CreateContactSliceProps,
  GetContactsByOwnerIdSliceProps,
} from './types';

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
    console.log(err);
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
    console.log(err);
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_CONTACTS', getContactsByOwnerIdWorker);
  yield takeLatest('CREATE_CONTACT', createContactWorker);
}
