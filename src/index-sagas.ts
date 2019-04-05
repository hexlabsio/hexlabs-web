import { all } from 'redux-saga/effects';
import { default as contactSaga } from './features/Contact/index-sagas';

export default function * rootSaga() {
  yield all([
    ...contactSaga,
  ]);
}
