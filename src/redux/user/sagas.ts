import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import * as userAPI from '../../api/user';
import { User } from '../../models/user';
import * as userSlice from './slice';
import { CreateUserSagaProps, GetUserSagaProps } from './types';

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
      throw new Error(`User with login: ${user.login} already exists.`);
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
      throw new Error(`User with login: ${login} not found.`);
    }
    if (data[0].password !== password) {
      throw new Error(`Incorrect password.`);
    }
    yield put(userSlice.getUser(data[0]));
  } catch (err) {
    console.error(err);
  }
}

function* logoutWorker() {
  try {
    yield put(userSlice.deleteUser());
  } catch (err) {
    console.error(err);
  }
}

export default function* rootSaga() {
  yield takeLatest('CREATE_USER', createUserWorker);
  yield takeLatest('GET_USER', loginWorker);
  yield takeLatest('LOGOUT', logoutWorker);
}
