import React from 'react';
import ReactDOM from 'react-dom';
import {default as configureStore, history} from "./index-store";
import {Provider} from 'react-redux';
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from "react-router";
import Landing from "./features/Landing";
import './assets/css/index.sass';


const store = configureStore({});

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/" component={Landing}/>
            </Switch>
        </ConnectedRouter>
    </Provider>
), document.getElementById('root'));