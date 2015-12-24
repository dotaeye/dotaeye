import * as authTypes from '../contants/auth';

const initialState = {
    loaded: false
};

export default function auth(state = initialState, action = {}) {
    switch (action.type) {
        case authTypes.LOAD_SESSION:
            return {
                ...state,
                loading: true
            };
        case authTypes.LOAD_SESSION_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                token: action.result
            };
        case authTypes.LOAD_SESSION_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.error
            };
        case authTypes.LOAD_AUTH_TOKEN:
            return {
                ...state,
                loading: false,
                loaded: true,
                token: action.result
            };
        case authTypes.REGISTER:
            return {
                ...state,
                registering: true
            };
        case authTypes.REGISTER_SUCCESS:
            return {
                ...state,
                registering: false
            };
        case authTypes.REGISTER_FAIL:
            return {
                ...state,
                registering: false,
                registerError: action.error
            };
        case authTypes.LOGIN:
            return {
                ...state,
                loggingIn: true
            };
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                token: action.result
            };
        case authTypes.LOGIN_FAIL:
            return {
                ...state,
                loggingIn: false,
                token: null,
                loginError: action.error
            };
        case authTypes.LOGOUT:
            return {
                ...state,
                loggingOut: true
            };
        case authTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                loggingOut: false,
                token: null
            };
        case authTypes.LOGOUT_FAIL:
            return {
                ...state,
                loggingOut: false,
                logoutError: action.error
            };
        default:
            return state;
    }
}

