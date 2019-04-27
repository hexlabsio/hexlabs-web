import { takeLatest, put, call } from 'redux-saga/effects';
import * as Actions from './index-actions';
import { default as axios } from 'axios';
import { apiEndpoint } from '../../index';

export function * submitContactForm({contact}: Actions.SUBMIT_CONTACT_FORM_REQUEST)  {
  try {
      yield call(axios.request, { method: 'post', url: `${apiEndpoint}/contact`, data: contact });
      yield put<Actions.SUBMIT_CONTACT_FORM_SUCCESS>({ type: Actions.SUBMIT_CONTACT_FORM_SUCCESS });
  } catch (error) {
    yield put<Actions.SUBMIT_CONTACT_FORM_ERROR>({ type: Actions.SUBMIT_CONTACT_FORM_ERROR });
  }
}

export default [
  takeLatest(Actions.SUBMIT_CONTACT_FORM_REQUEST, submitContactForm),
];
