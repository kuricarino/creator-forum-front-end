import axios from 'axios';
const endpoint = 'http://localhost:4000/api/v1';

const feedbackIndex = (uploadId) => {
    let request = axios.get(`${endpoint}/uploads/${uploadId}/feedback`)
    return request;
}
const feedbackCreate = (uploadId, feedback) => {
    return axios.post(`${endpoint}/uploads/${uploadId}/feedback`, feedback)
}

// const uploadUpdate = (_id, upload) => {
//     return axios.put(`${endpoint}/uploads/${_id}`, upload)
// }

// const uploadDelete = (upload) => {
//     return axios.delete(`${endpoint}/uploads/${upload._id}`)
// }

export default {
    feedbackIndex,
    feedbackCreate
}