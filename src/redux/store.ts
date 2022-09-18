import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import user, { IUserState } from './user/slice';
import contacts from './contacts/slice';
import userSaga from './user/sagas';
import contactsSaga from './contacts/sagas';
import { Contact } from '../models/contacts';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { user, contacts },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

export interface IStore {
  user: IUserState;
  contacts: Contact[];
}

sagaMiddleware.run(userSaga);
sagaMiddleware.run(contactsSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
