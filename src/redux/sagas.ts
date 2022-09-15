import { takeLatest } from 'redux-saga/effects';

function* checkSagas() {
  console.log('sagas work');
}

export default function* rootSaga() {
  yield takeLatest('CHECK', checkSagas);
}
