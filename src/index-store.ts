import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { default as createRootReducer } from './index-reducer';

import reduxThunk from 'redux-thunk';

interface WindowWithReduxDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: typeof compose;
}

const windowWithRedux = window as WindowWithReduxDevTools;

export const history = createBrowserHistory();

export default function configureStore(initialState: any) {
  const composeEnhancers = windowWithRedux.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? windowWithRedux.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  return createStore(
        createRootReducer(history),
        initialState,
        composeEnhancers(applyMiddleware(routerMiddleware(history), reduxThunk)),
    );
}
