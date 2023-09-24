
import axios from 'axios';
import AuthRepository from '../Repositories/AuthRepository';
import helpers from './helper';
import router from '../router/web';


const api_instance = axios.create({
  baseURL: process.env.VUE_APP_APIGW_BASE_URL, // Replace with your API server URL
  timeout: 1000,
});

api_instance.interceptors.request.use(
  (config) => {
    const token = helpers.getCookie('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api_instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 401 && router.history.current.meta.require_auth) {
      error.config.retries = error.config.retries || 0 ;
      const maxRetries = 10;
      if ( error.config.retries < maxRetries) {
        error.config.retries++;
        try {
          const response = await AuthRepository.refreshAccessToken();
          const original_request = error.config;
          if(response.status == 200 && response.data.status && response.data.data.access_token)
          {
            let new_access_token = response.data.data.access_token;
            helpers.setCookie('token', new_access_token, 1);
            original_request.headers.Authorization = `Bearer ${new_access_token}`;
          }
          return api_instance(original_request);
        } catch (refreshError) {
          console.log(refreshError);
          throw refreshError;
        }
      }
    }
    return Promise.reject(error);
  }
);
export default api_instance;
