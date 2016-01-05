import * as blogTypes from '../contants/blogType';
import configs from '../configs'

export function loadBlogType() {
    return {
        types: [blogTypes.LOAD_BLOG, blogTypes.LOAD_BLOG_SUCCESS, blogTypes.LOAD_BLOG_FAIL],
        promise: (client) => client.get('/blogType')
    };
}

export function loadBlogTypeById(Id) {
    return {
        types: [blogTypes.LOAD_BLOG, blogTypes.LOAD_BLOG_SUCCESS, blogTypes.LOAD_BLOG_FAIL],
        promise: (client) => client.get('/blogType', {
            params: {Id}
        })
    };
}

export function createBlogType(data) {
    return {
        types: [blogTypes.CREATE_BLOG, blogTypes.CREATE_BLOG_SUCCESS, blogTypes.CREATE_BLOG_FAIL],
        promise: (client) => client.post('/blogType/create', {
            data: data,
            token: true,
        })
    };
}

export function updateBlogType(data) {
    return {
        types: [blogTypes.UPDATE_BLOG, blogTypes.UPDATE_BLOG_SUCCESS, blogTypes.UPDATE_BLOG_FAIL],
        promise: (client) => client.post('/blogType/update', {
            data: data,
            token: true,
        })
    };
}

export function deleteBlogType(data) {
    return {
        types: [blogTypes.DELETE_BLOG, blogTypes.DELETE_BLOG_SUCCESS, blogTypes.DELETE_BLOG_FAIL],
        promise: (client) => client.post('/blogType/update', {
            data: data,
            token: true,
        })
    };
}
