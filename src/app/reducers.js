import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { landingReducer } from '../landing/LandingReducer';

export default history =>
    combineReducers({
        router: connectRouter(history),
        landing: landingReducer,
    });
