import * as blogTypes from '../contants/blog';
import configs from '../configs'

export function loadBlog() {
    return {
        types: [blogTypes.LOAD_BLOG, blogTypes.LOAD_BLOG_SUCCESS, blogTypes.LOAD_BLOG_FAIL],
        promise: (client) => client.get('/blog')
    };
}

export function loadBlogById(Id) {
    return {
        types: [blogTypes.LOAD_BLOG, blogTypes.LOAD_BLOG_SUCCESS, blogTypes.LOAD_BLOG_FAIL],
        promise: (client) => client.get('/blog', {
            params: {Id}
        })
    };
}

export function createBlog(data) {
    return {
        types: [blogTypes.CREATE_BLOG, blogTypes.CREATE_BLOG_SUCCESS, blogTypes.CREATE_BLOG_FAIL],
        promise: (client) => client.post('/blog/create', {
            data: data,
            token: true,
        })
    };
}

export function updateBlog(data) {
    return {
        types: [blogTypes.UPDATE_BLOG, blogTypes.UPDATE_BLOG_SUCCESS, blogTypes.UPDATE_BLOG_FAIL],
        promise: (client) => client.post('/blog/update', {
            data: data,
            token: true,
        })
    };
}

export function deleteBlog(data) {
    return {
        types: [blogTypes.DELETE_BLOG, blogTypes.DELETE_BLOG_SUCCESS, blogTypes.DELETE_BLOG_FAIL],
        promise: (client) => client.post('/blog/update', {
            data: data,
            token: true,
        })
    };
}
