import axios from 'axios';

// process.env.URL
const api = axios.create({
    baseURL: 'https://cardio-disease-predict.herokuapp.com/',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default api;