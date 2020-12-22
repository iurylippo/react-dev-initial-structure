import axios from 'axios';

const api = axios.create({
    baseURL: 'https://fastmanager-3-backend.herokuapp.com',
});

export default api;
