import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7046/api',
});

export default axiosInstance;