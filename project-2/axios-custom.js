const axios = require('axios');
const instance = axios.create({
    baseURL: process.env.BASE_URL,
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
  });

module.exports = instance;