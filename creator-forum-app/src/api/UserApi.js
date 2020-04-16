import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1';

const register = (user) => {
    return axios.post(`${endpoint}/register`, user)
        .then(res => res);
}

const login = (user) => {
    return axios.post(`${endpoint}/login`, user)
        .then(res => res);
}

const update = (user) => { // id or _id?
    let request = axios.put(`${endpoint}/users/${user._id}`, user)
    return request;
}

const show = (id) => {
    return axios.get(`${endpoint}/users/${id}`);
}

export default {
    register,
    login,
    update,
    show
}