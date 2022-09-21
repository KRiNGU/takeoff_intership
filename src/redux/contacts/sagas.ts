import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as contactAPI from '../../api/contact';
import * as contactSlice from './slice';
import {
  Contact,
  CreateContactWorkerProps,
  DeleteContactWorkerProps,
  GetContactsByOwnerIdWorkerProps,
  UpdateContactWorkerProps,
} from '../../models/contacts';

function* deleteContactWorker({ payload: { id } }: DeleteContactWorkerProps) {
  try {
    yield call(contactAPI.deleteContactAPI, id);
    yield put(contactSlice.deleteContact({ id }));
  } catch (err) {
    console.error(err);
  }
}

function* updateContactWorker({
  payload: { id, contact },
}: UpdateContactWorkerProps) {
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

function* createContactWorker({
  payload: { contact },
}: CreateContactWorkerProps) {
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

function* getContactsByOwnerIdWorker({
  payload: { ownerId },
}: GetContactsByOwnerIdWorkerProps) {
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

export function* clearContactsWorker() {
  try {
    yield put(contactSlice.clearContacts());
  } catch (err) {
    console.error(err);
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_CONTACTS', getContactsByOwnerIdWorker);
  yield takeLatest('CREATE_CONTACT', createContactWorker);
  yield takeLatest('UPDATE_CONTACT', updateContactWorker);
  yield takeLatest('DELETE_CONTACT', deleteContactWorker);
}
