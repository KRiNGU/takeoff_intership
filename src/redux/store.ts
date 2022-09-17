import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import userState from './user/slice';
import userSaga from './user/sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { userState },
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(userSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
