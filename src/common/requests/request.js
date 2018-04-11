/**
 * Created by zhouqihang on 2018/3/15.
 */

import axios from 'axios';

const timeout = 8000;

const object2string = obj => {
    let arr = [];
    for (let k in obj) {
        if (obj[k] === '' || obj[k] === null || obj[k] === undefined) {
            continue;
        }
        arr.push(`${k}=${obj[k]}`);
    }
    return '?' + arr.join('&');
};

const base = (url, params = {}, method = 'get') => new Promise((resolve, reject) => {
    if (method === 'get') {
        url += object2string(params);
    }
    axios({method, url, data: params, timeout})
        .then(res => resolve(res.data))
        .catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // error.response.data
                // error.response.status
                // error.response.headers
                const { errors, message } = error.response.data;
                let errorMsg = message;
                for (let k in errors) {
                    if (errors[k]) {
                        errorMsg = errors[k];
                        break;
                    }
                }
                reject(errorMsg);
            }
            else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                reject(error.message);
            }
            else {
                // Something happened in setting up the request that triggered an Error
                reject(error.message);
            }
        });
});

export const get = (url, params = {}) => base(url, params, 'get');
export const post = (url, params = {}) => base(url, params, 'post');
export const remove = (url, params = {}) => base(url, params, 'delete');
export const patch = (url, params = {}) => base(url, params, 'patch');
export const put = (url, params = {}) => base(url, params, 'put');

const request = {
    get,
    post,
    remove,
    patch,
    put,
};

export default request;
