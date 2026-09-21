import axios from "axios";
import {  setAuthenticated } from "./store/auth/authSlice";
import { store } from "./store/store";

// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
});

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {

        if (error.config.url !== '/api/login') {
            if (error.response?.status === 401) {
                console.log("User is not logged in.");
                store.dispatch(setAuthenticated(false))
            }
        }

        return Promise.reject(error);
    }
);


export default instance


