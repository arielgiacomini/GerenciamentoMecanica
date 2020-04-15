import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.arielgiacomini.com.br/'
});

export default api;