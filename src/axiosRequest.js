const axios = require('axios');
const config = require('./config.js');
// import config from './config';

export default async function axiosRequest(route) {
  console.log(route);
  let res = await axios.get(`${config.default.dev.BACKEND_URL}/${route}`);
  return res.data;
}
