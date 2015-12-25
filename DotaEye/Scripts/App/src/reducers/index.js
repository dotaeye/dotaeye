import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import order from './order';

export default combineReducers({
    form,
    auth,
    order
});
