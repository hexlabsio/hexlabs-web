import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { default as createRootReducer } from './index-reducer';

import reduxSaga from 'redux-saga';

interface WindowWithReduxDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
}

const windowWithRedux = window as WindowWithReduxDevTools;
export const sagaMiddleware = reduxSaga();
export const history = createBrowserHistory();

export default function configureStore(initialState: any) {
  const composeEnhancers = windowWithRedux.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? windowWithRedux.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  return createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
    );
}
