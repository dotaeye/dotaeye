import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createMiddleware from '../middleware/clientMiddleware';
import transitionMiddleware from '../middleware/transitionMiddleware';
import reducers from '../reducers'
import { DevTools } from '../containers';

export default function createStore(client, storage) {
    const middleware = [createMiddleware(client, storage),createLogger()];
    let finalCreateStore = compose(applyMiddleware(...middleware),
        DevTools.instrument()
    )(_createStore);
    const store = finalCreateStore(reducers);
    return store;
}
