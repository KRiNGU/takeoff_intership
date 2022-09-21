import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as userAPI from '../../api/user';
import { CreateUserSagaProps, GetUserSagaProps, User } from '../../models/user';
import { clearContactsWorker } from '../contacts/sagas';
import * as userSlice from './slice';

function* createUserWorker({ payload: { user } }: CreateUserSagaProps) {
  try {
    const getResponse: AxiosResponse<User[]> = yield call(
      userAPI.getUserByLogin,
      {
        login: user.login,
      }
    );
    const getData: User[] = getResponse.data;
    if (getData.length !== 0) {
      yield put(userSlice.setError('User already exists.'));
    }
    const { data } = yield call(userAPI.createUser, user);

    yield put(userSlice.getUser(data));
  } catch (err) {
    console.error(err);
  }
}

function* loginWorker({ payload: { login, password } }: GetUserSagaProps) {
  try {
    const response: AxiosResponse<User[]> = yield call(userAPI.getUserByLogin, {
      login,
    });
    const data = response.data;
    if (data.length === 0) {
      yield put(userSlice.setError('Wrong login.'));
      return;
    }
    if (data[0]?.password !== password) {
      yield put(userSlice.setError('Incorrect password.'));
      return;
    }
    yield put(userSlice.getUser(data[0]));
  } catch (err) {
    console.error(err);
  }
}

function* clearError() {
  try {
    yield put(userSlice.setError(''));
  } catch (err) {
    console.error(err);
  }
}

function* logoutWorker() {
  try {
    yield put(userSlice.deleteUser());
    yield call(clearContactsWorker);
  } catch (err) {
    console.error(err);
  }
}

export default function* rootSaga() {
  yield takeLatest('CREATE_USER', createUserWorker);
  yield takeLatest('GET_USER', loginWorker);
  yield takeLatest('LOGOUT', logoutWorker);
  yield takeLatest('CLEAR_ERROR', clearError);
}
