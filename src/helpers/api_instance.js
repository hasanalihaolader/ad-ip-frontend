
import axios from 'axios';
const api_instance = axios.create({
  baseURL: process.env.APIGW_BASE_URL, // Replace with your API server URL
});

export default api_instance;