import superagent from 'superagent';
import configs from '../configs';
import sessionStorage from './sessionStorage';

const methods = ['get', 'post', 'put', 'patch', 'del'];

function formatUrl(path) {
    let adjustedPath = path[0] !== '/' ? '/' + path : path;
    adjustedPath = configs.virtualPath + configs.apiRoot + adjustedPath;
    return adjustedPath;
}

class _ApiClient {
    constructor(req) {
        methods.forEach((method) =>
            this[method] = (path, { params, data, formEncoding ,token} = {}) => new Promise((resolve, reject) => {
                const request = superagent[method](formatUrl(path));
                if (formEncoding) {
                    request.set('Content-Type', 'application/x-www-form-urlencoded');
                }
                if (token) {
                    let bearerToken = sessionStorage.get(configs.authToken).access_token;
                    request.set('Authorization', 'Bearer ' + bearerToken)
                }
                if (params) {
                    request.query(params);
                }
                if (data) {
                    request.send(data);
                }
                request.end((err, { body } = {}) => err ? reject(body || err) : resolve(body));
            }));
    }
}

const ApiClient = _ApiClient;

export default ApiClient;
