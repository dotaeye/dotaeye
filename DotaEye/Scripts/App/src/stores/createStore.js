import { createStore as _createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import createMiddleware from '../middleware/clientMiddleware';
import transitionMiddleware from '../middleware/transitionMiddleware';
import reducers from '../reducers'

export default function createStore(client, storage) {
    const middleware = [createMiddleware(client, storage),createLogger()];
    let finalCreateStore = applyMiddleware(...middleware)(_createStore);
    const store = finalCreateStore(reducers);
    return store;
}
