import * as authTypes from '../contants/auth';
import configs from '../configs'

export function load() {
    return {
        types: [authTypes.LOAD_SESSION, authTypes.LOAD_SESSION_SUCCESS, authTypes.LOAD_SESSION_FAIL],
        promise: (client) => client.get('/user')
    };
}


export function register(data) {
    return {
        types: [authTypes.REGISTER, authTypes.REGISTER_SUCCESS, authTypes.REGISTER_FAIL],
        promise: (client) => client.post('/account/register', {
            data: data
        })
    };
}

export function loadAuthToken(token) {
    return {
        type: authTypes.LOAD_AUTH_TOKEN,
        result: token
    }
}

export function login(data) {
    return {
        types: [authTypes.LOGIN, authTypes.LOGIN_SUCCESS, authTypes.LOGIN_FAIL],
        promise: (client) => client.post('/Token', {
            data: data,
            formEncoding: true
        }),
        storageKey: configs.authToken
    };
}


export function logout() {
    return {
        types: [authTypes.LOGOUT, authTypes.LOGOUT_SUCCESS, authTypes.LOGOUT_FAIL],
        promise: (client) => client.post('/account/logout', {
            token: true,
        }),
        removeStorageKey: configs.authToken
    };
}