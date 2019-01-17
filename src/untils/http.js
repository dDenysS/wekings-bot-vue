import axios from 'axios'
import router from '../router/'

const http = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:7777/api' : '/',
    timeout: 5000,
    withCredentials: true
})

http.interceptors.request.use(config => {
    return config
}, err => {
    // Do something with request error
    return Promise.reject(err)
})

http.interceptors.response.use(response => {
    return response
}, err => {
    if (err.response && err.response.status === 401) {
        router.push({name: 'login'})
    }
    return Promise.reject(err)
})

export default http
