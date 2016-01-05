import * as blogTypes from '../contants/blogtype';

const initialState = {};

export default function blogType(state = initialState, action = {}) {
    switch (action.type) {
        case blogTypes.LOAD_BLOGTYPE:
        case blogTypes.LOAD_BLOGTYPE_BY_ID:
        case blogTypes.CREATE_BLOGTYPE:
        case blogTypes.UPDATE_BLOGTYPE:
        case blogTypes.DELETE_BLOGTYPE:
            return {
                ...state,
                loading: true
            };
        case blogTypes.LOAD_BLOGTYPE_FAIL:
        case blogTypes.LOAD_BLOGTYPE_BY_ID_FAIL:
        case blogTypes.CREATE_BLOGTYPE_FAIL:
        case blogTypes.UPDATE_BLOGTYPE_FAIL:
        case blogTypes.DELETE_BLOGTYPE_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case blogTypes.LOAD_BLOGTYPE_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.result
            };
        case blogTypes.LOAD_BLOGTYPE_BY_ID_SUCCESS:
            return {
                ...state,
                current: action.result,
                loading: false
            };
        case blogTypes.CREATE_BLOGTYPE_SUCCESS:
            state.list.push(action.result);
            return {
                ...state,
                loading: false
            };
        case blogTypes.UPDATE_BLOGTYPE_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case blogTypes.DELETE_BLOGTYPE_SUCCESS:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
}

