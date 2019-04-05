import { Reducer } from 'redux';
import * as Actions from './index-actions';
import { default as initialState, IndexState } from './index-state';

const indexReducer: Reducer<IndexState, Actions.ACTIONS> = (state = initialState, action: Actions.ACTIONS) => {
  switch (action.type) {
    case Actions.SUBMIT_CONTACT_FORM_REQUEST:
      return state;
    default:
      return state;
  }
};

export default indexReducer;
