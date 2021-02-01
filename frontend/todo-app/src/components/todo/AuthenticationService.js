import Axios from "axios";
import { USER_NAME_SESSION_ATTRIBUTE_NAME, API_URI } from './TodoConstants';

class AuthenticationService {

    executeJWTAuthService(username, password) {
        return Axios.post(`${API_URI}/authenticate`,
            {
                username,
                password
            })
    }

    createBasicAuthToken(userName, password) {
        return 'Basic ' + window.btoa(userName + ":" + password)
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    executeBasicAuthService(userName, password) {
        return Axios.get(`${API_URI}/basicAuth`,
            {
                headers: { authorization: this.createBasicAuthToken(userName, password) }
            })
    }

    registerSuccessfulLogin(userName, password) {
        console.log("Registering the logged in user.")
        // let basicAuthHeader = 'Basic ' + window.btoa(userName + ":" + password) 
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userName);
        this.setUpAxiosInterceptor(this.createBasicAuthToken(userName, password))
    }
    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    registerSuccessfulLoginForJWT(userName, token) {
        console.log("Registrig the logged in user with Token")
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, userName);
        this.setUpAxiosInterceptor(this.createJWTToken(token))
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) {
            return false
        } else {
            return true
        }
    }

    getUserLoggedUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
        if (user === null) {
            return ''
        } else {
            return user
        }
    }

    setUpAxiosInterceptor(token) {

        Axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
export default new AuthenticationService()