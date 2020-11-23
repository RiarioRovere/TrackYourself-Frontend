const axios = require('axios');

const token = localStorage.getItem('token')

export default axios.create({
    baseURL: 'https://api.trackyourself.io',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});