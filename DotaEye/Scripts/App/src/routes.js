import React from 'react';
import {IndexRoute, Route} from 'react-router';
import { load as loadAuth } from './actions/auth';
import {
    App,
    Home,
    List,
    Login,
    Register,
    Profile,
    NotFound
} from './containers';

export default (store) => {
    const requireLogin = (nextState, replaceState, cb) => {
        const { auth: { token }} = store.getState();
        if (!token) {
            // oops, not logged in, so can't be here!
            replaceState(null, '/login');
        }
        cb();
    };

    /**
     * Please keep routes in alphabetical order
     */
    return (
        <Route path='/' component={App}>

            { /* Routes requiring login */ }

            <IndexRoute component={Home}/>

            <Route path='login' component={Login}/>

            <Route path='register' component={Register}/>

            <Route path='list' component={List} onEnter={requireLogin}/>

            <Route path='profile' component={Profile} onEnter={requireLogin}/>

            { /* Catch all route */ }
            <Route path='*' component={NotFound} status={404}/>
        </Route>
    );
};
