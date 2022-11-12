const axios = require('axios');

axios.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

const get = async () => {
    try {
        const res = await axios.get(url, {});
        return res
    } catch (error) {
        return error;
    }
}