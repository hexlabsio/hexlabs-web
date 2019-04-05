import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import { default as landingReducer } from './features/Landing/index-reducer';
import { default as contactReducer } from './features/Contact/index-reducer';
import { reducer as formReducer } from 'redux-form';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  landing: landingReducer,
  contact: contactReducer,
  form: formReducer,
});
