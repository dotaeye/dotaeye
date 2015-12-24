var _ = require('lodash');

function fetchData(store, routerState, cb) {
    cb = cb || function noop() {
        };
    let fetchDataRoutes = _.filter(routerState.components, function (component) {
        return component.fetchData;
    });
    if (fetchDataRoutes.length === 0) {
        return cb();
    }
    let promise = fetchDataRoutes.map(component=> {
        return component.fetchData
            .bind(null, store.dispatch, store.getState, routerState.params, routerState.location.query)();
    });
    return Promise.all(promise).then(cb);
}

module.exports = fetchData;