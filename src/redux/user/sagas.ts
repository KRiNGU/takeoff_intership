import { call, put, takeLatest } from 'redux-saga/effects';
import * as userAPI from '../../api/user';
import { getUser } from './slice';
import { GetUserSagaProps } from './types';

function* createUser({ payload: { user } }: GetUserSagaProps) {
  try {
    console.log(user);
    const { data } = yield call(userAPI.createUser, user);

    yield put(getUser(data));
  } catch (err) {}
}

export default function* rootSaga() {
  yield takeLatest('CREATE_USER', createUser);
}
