import axios from 'axios';
import globalConfig from 'config/global.config';

const api = axios.create({
    baseURL: globalConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
});
api.interceptors.response.use(response => {
    return JSON.parse(response.data.replace('response=',''));
}, error => {
    return Promise.reject(error);
})

export default api;