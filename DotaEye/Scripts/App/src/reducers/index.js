import { combineReducers } from 'redux';
import {  routeReducer } from 'redux-simple-router'
import { reducer as form } from 'redux-form';
import auth from './auth';
import order from './order';

export default combineReducers({
    routing: routeReducer,
    form,
    auth,
    order
});
