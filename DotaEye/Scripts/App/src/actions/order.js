import * as orderTypes from '../contants/order';

export function load() {
    return {
        types: [orderTypes.LOAD_ORDER, orderTypes.LOAD_ORDER_SUCCESS, orderTypes.LOAD_ORDER_FAIL],
        promise: (client) => client.get('/order', {
            token: true
        })
    };
}

export function loadOrderById(id) {
    return {
        types: [orderTypes.LOAD_ORDER_BY_ID, orderTypes.LOAD_ORDER_BY_ID_SUCCESS, orderTypes.LOAD_ORDER_BY_ID_FAIL],
        promise: (client) => client.get('/order', {
            token: true,
            params: {id}
        })
    };
}

