import * as blogTypes from '../contants/blog';

const initialState = {};

export default function blog(state = initialState, action = {}) {
    switch (action.type) {
        case blogTypes.LOAD_BLOG:
            return {
                ...state,
                loading: true
            };
        case blogTypes.LOAD_BLOG_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.result
            };
        case blogTypes.LOAD_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case blogTypes.LOAD_BLOG_BY_ID:
            return {
                ...state,
                loading: true
            };
        case blogTypes.LOAD_BLOG_BY_ID_SUCCESS:
            return {
                ...state,
                current: action.result,
                loading: false
            };
        case blogTypes.LOAD_BLOG_BY_ID_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case blogTypes.CREATE_BLOG:
            return {
                ...state,
                loading: true
            };
        case blogTypes.CREATE_BLOG_SUCCESS:
            state.list.push(action.result);
            return {
                ...state,
                loading: false
            };
        case blogTypes.CREATE_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case blogTypes.UPDATE_BLOG:
            return {
                ...state,
                loading: true
            };
        case blogTypes.UPDATE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case blogTypes.UPDATE_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case blogTypes.DELETE_BLOG:
            return {
                ...state,
                loading: true
            };
        case blogTypes.DELETE_BLOG_SUCCESS:
            return {
                ...state,
                loading: false
            };
        case blogTypes.DELETE_BLOG_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

