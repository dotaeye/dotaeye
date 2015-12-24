export default function clientMiddleware(client, storage) {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }
            const { promise, types,storageKey,removeStorageKey, ...rest } = action;
            if (!promise) {
                return next(action);
            }
            const [REQUEST, SUCCESS, FAILURE] = types;
            next({...rest, type: REQUEST});
            return promise(client).then(
                (result) => {
                    if (storageKey) {
                        storage.set(storageKey, result);
                    }
                    if (removeStorageKey) {
                        storage.remove(removeStorageKey);
                    }
                    next({...rest, result, type: SUCCESS})
                },
                (error) => next({...rest, error, type: FAILURE})
            ).catch((error)=> {
                    console.error('MIDDLEWARE ERROR:', error);
                    next({...rest, error, type: FAILURE});
                });
        };
    };
}
