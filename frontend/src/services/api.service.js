require('fetch-intercept');

import * as fetchIntercept from 'fetch-intercept';
import store from "@/store/index";


const ApiService = {

    addBaseUrl(url) {
        return "http://localhost:3000" + url;
    },

    addToken(options) {
        const update = { ...options };
        if (localStorage.jwt) {
            update.headers = {
                ...update.headers,
                Authorization: `Bearer ${localStorage.jwt}`,
            };
        }
        return update;
    },

    get(path, options) {
        return fetch(this.addBaseUrl(path), this.addToken(options));
    },

    post(path, options) {
        const data = { ...options};
        data.method = "POST";

        return fetch(this.addBaseUrl(path), this.addToken(data));
    },

    delete(path) {
        return fetch(this.addBaseUrl(path), { method: "DELETE" });
    },

    customRequest(path, options){
        return fetch(path, this.addToken(options));
    },

    mount401Interceptor() {

        fetchIntercept.register({
            request: function (url, config) {
                // Modify the url or config here
                return [url, config];
            },

            requestError: function (error) {
                // Called when an error occured during another 'request' interceptor call
                return Promise.reject(error);
            },

            response: function (response) {
                // Modify the reponse object
                return response;
            },

            responseError: function (error) {
                // Handle an fetch error

                if (error.request.status === 401) {
                    if (error.config.url.includes('/auth/refresh_token')) {
                        // Refresh token has failed. Logout the user
                        return store.dispatch('logout', {});
                    }
                    else {
                        // Refresh the access token
                        store.dispatch('refreshToken', {})
                            .then(
                                () => { // fulfillment
                                    return this.customRequest(
                                        error.config.url,
                                        {
                                            headers: {
                                                "Content-Type": "application/json",
                                            },
                                            credentials: 'include', // Include credentials (cookies) in the request
                                            method: error.config.method,
                                            body: error.config.body
                                        }
                                    )
                                },
                                () => { // rejection
                                    // Refresh has failed - reject the original request
                                    return Promise.reject(error);
                                }
                            );
                        // Retry the original request
                    }
                }

                return Promise.reject(error);
            }
        });
    },

    unmount401Interceptor() {
        fetchIntercept.register({
            request: function (url, config) {
                // Modify the url or config here
                return [url, config];
            },

            requestError: function (error) {
                // Called when an error occured during another 'request' interceptor call
                return Promise.reject(error);
            },

            response: function (response) {
                // Modify the reponse object
                return response;
            },

            responseError: function (error) {
                // Handle an fetch error
                return Promise.reject(error);
            }
        })
    }
}

export default ApiService