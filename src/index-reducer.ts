import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { combineReducers } from 'redux';
import indexReducer from './features/Landing/index-reducer';
import { reducer as formReducer } from 'redux-form';

export default (history: History) => combineReducers({
  router: connectRouter(history),
  landing: indexReducer,
  form: formReducer,
});
