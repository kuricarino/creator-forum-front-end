import axios from 'axios';
const endpoint = 'http://localhost:4000/api/v1';

const feedbackIndex = (uploadId) => {
    let request = axios.get(`${endpoint}/uploads/${uploadId}/feedback`)
    return request;
}
const feedbackCreate = (feedback) => {
    return axios.post(`${endpoint}/uploads/${feedback.uploadId}/feedback`, feedback)
}

const feedbackUpdate = (feedback) => {
    return axios.put(`${endpoint}/uploads/${feedback.upload}/feedback/${feedback._id}`, feedback)
}

const feedbackDelete = (feedback) => {
    return axios.delete(`${endpoint}/uploads/${feedback.upload}/feedback/${feedback._id}`)
}

export default {
    feedbackIndex,
    feedbackCreate,
    feedbackUpdate,
    feedbackDelete
}