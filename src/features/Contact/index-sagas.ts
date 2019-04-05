import { takeLatest, put, call } from 'redux-saga/effects';
import * as Actions from './index-actions';

export function * submitContactForm() {
  try {
    yield put<Actions.SUBMIT_CONTACT_FORM_SUCCESS>({ type: Actions.SUBMIT_CONTACT_FORM_SUCCESS });
  } catch (error) {
    yield put<Actions.SUBMIT_CONTACT_FORM_ERROR>({ type: Actions.SUBMIT_CONTACT_FORM_ERROR });
  }
}

export default [
  takeLatest(Actions.SUBMIT_CONTACT_FORM_REQUEST, submitContactForm),
];
