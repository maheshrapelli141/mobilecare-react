import axios from 'axios';
import globalConfig from 'config/global.config';

const api = axios.create({
    baseURL: globalConfig.baseUrl,
    headers: {
        "Content-Type": "application/json",
    }
});

export default api;