import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth';
import order from './order';
import blog from './blog';
import blogType from './blogType';

export default combineReducers({
    form,
    auth,
    blog,
    blogType,
    order
});
