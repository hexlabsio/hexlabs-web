import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {History} from 'history';
import indexReducer from './features/Landing/index-reducer';

export default (history: History) => combineReducers({
    router: connectRouter(history),
    landing: indexReducer
});
