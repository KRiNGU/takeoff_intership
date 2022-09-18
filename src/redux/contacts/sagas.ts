import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as contactAPI from '../../api/contact';
import { Contact } from '../../models/contacts';
import { getContacts } from './slice';
import { GetContactsByOwnerIdProps } from './types';

export function* getContactsByOwnerId({
  payload: { ownerId },
}: GetContactsByOwnerIdProps) {
  try {
    const response: AxiosResponse<Contact[]> = yield call(
      contactAPI.getContactsByOwnerId,
      ownerId
    );

    const data: Contact[] = response.data;

    yield put(getContacts(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  yield takeLatest('GET_CONTACTS', getContactsByOwnerId);
}
