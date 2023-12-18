
import ApiService from './api.service';
import { TokenService } from './storage.service';


class AuthenticationError extends Error {
    constructor(errorCode, message) {
        super(message);
        this.name = this.constructor.name;
        this.message = message;
        this.errorCode = errorCode;
    }
}

const UserService = {
    /**
     * Login the user and store the access token to TokenService.
     *
     * @returns jwt
     * @throws AuthenticationError
     **/
    login: async function(email, password) {

        const credentials = {
            email: email,
            password: password
        };

        const requestData = {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include', // Include credentials (cookies) in the request
            body: JSON.stringify(credentials)
        };

        try {
            const response = await ApiService.post("/auth/login", requestData)

            TokenService.saveToken(response.json.jwt);
            TokenService.saveRefreshToken(response.cookie.refresh_token);

            ApiService.mount401Interceptor();

            return response.json.jwt;
        } catch (error) {
            console.log(error);
            throw new AuthenticationError(error.response.status, error.message);
        }
    },

    /**
     * Refresh the access token.
     **/
    refreshToken: async function() {
        const refreshToken = { refresh_token: TokenService.getRefreshToken() };

        const requestData = {
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include', // Include credentials (cookies) in the request
            body: JSON.stringify(refreshToken)
        };

        try {
            const response = await ApiService.post("/auth/refresh_token", requestData);

            TokenService.saveToken(response.json.jwt);
            TokenService.saveRefreshToken(response.cookie.refresh_token);

            return response.json.jwt;
        } catch (error) {
            throw new AuthenticationError(error.response.status, error.message);
        }

    },

    /**
     * Logout the current user and remove the access and refresh token from local storage
     *
     * Will also remove `Authorization Bearer <token>` header from future requests.
     **/
    logout: async function() {
        try {
            await ApiService.get("/auth/logout", {credentials: 'include'});

            // Remove the token and remove Authorization header from Api Service as well
            TokenService.removeToken()
            TokenService.removeRefreshToken()

            ApiService.unmount401Interceptor()

            return true;
        } catch (error) {
            return false;
        }
    }
}

export default UserService

export { UserService, AuthenticationError }