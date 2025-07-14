import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://3.22.77.140:8443/auth'
})