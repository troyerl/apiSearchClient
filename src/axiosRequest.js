const axios = require('axios');

export default async function axiosRequest(route) {
  let res = await axios.get(`http://localhost:5000/${route}`);
  return res.data;
}
