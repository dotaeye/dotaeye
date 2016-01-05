import 'babel-core/polyfill';
import './polyfills';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createHashHistory, useBasename } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import { DevTools } from './containers';
import createRoutes from './routes'
import createStore from './stores/createStore'
import ApiClient from './utils/ApiClient';
import fetchData from './utils/fetchData';
import sessionStorage from './utils/sessionStorage';
import configs from './configs';
import { loadAuthToken } from './actions/auth';
import 'antd/lib/index.css';

sessionStorage.setNamespace('dotaeye');

//const history = useBasename(createHistory)({
//    basename: '/App'
//});

const history = createHashHistory();

const client = new ApiClient();

const store = createStore(client, sessionStorage);

const token = sessionStorage.get(configs.authToken);

store.dispatch(loadAuthToken(token))

//syncReduxAndRouter(history, store);

const routes = createRoutes(store);

if (true) {
    window.React = React; // enable debugger
    ReactDOM.render(
        <Provider store={store} key="provider">
            <Router routes={routes} history={history} onUpdate={UpdateRoute}/>
        </Provider>,
        document.getElementById('main')
    );
} else {
    const DevTools = require('./containers/DevTools');
    ReactDOM.render(
        <Provider store={store} key="provider">
            <div>
                <Router routes={routes} history={history} onUpdate={UpdateRoute}/>
                <DevTools />
            </div>
        </Provider>,
        document.getElementById('main')
    );
}

function UpdateRoute() {
    fetchData(store, this.state)
}