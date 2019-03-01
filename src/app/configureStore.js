import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
    );
}
