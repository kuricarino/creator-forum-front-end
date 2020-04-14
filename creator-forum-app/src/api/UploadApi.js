import axios from 'axios';
const endpoint = 'http://localhost:4000/api/v1';

const uploadIndex = () => {
    let request = axios.get(`${endpoint}/uploads`)
    return request;
}

const uploadCreate = (upload) => {
    return axios.post(`${endpoint}/uploads`, upload)
}

export default {
    uploadIndex,
    uploadCreate
}