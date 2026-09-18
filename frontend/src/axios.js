import axios from "axios";

// axios.defaults.withCredentials = true;
// axios.defaults.withXSRFToken = true;

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    withXSRFToken: true,
});

export default instance


