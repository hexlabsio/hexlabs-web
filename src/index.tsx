import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import './assets/css/index.sass';
import Landing from './features/Landing';
import { default as rootSaga } from './index-sagas';
import { default as configureStore, history, sagaMiddleware } from './index-store';

const store = configureStore({});

export const apiEndpoint = process.env.REACT_APP_ENV === 'production' ? 'https://api.hexlabs.io/web' : '';

sagaMiddleware.run(rootSaga);

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/" component={Landing}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));
