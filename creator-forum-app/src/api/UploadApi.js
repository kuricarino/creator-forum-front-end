import axios from 'axios';
const endpoint = 'http://localhost:4000/api/v1';

const uploadIndex = () => {
    let request = axios.get(`${endpoint}/uploads`)
    return request;
}

const uploadCreate = (upload) => {
    return axios.post(`${endpoint}/uploads`, upload)
}

const uploadUpdate = (_id, upload) => {
    return axios.put(`${endpoint}/uploads/${_id}`, upload)
}

const uploadDelete = (upload) => {
    return axios.delete(`${endpoint}/uploads/${upload._id}`)
}

export default {
    uploadIndex,
    uploadCreate,
    uploadUpdate,
    uploadDelete
}