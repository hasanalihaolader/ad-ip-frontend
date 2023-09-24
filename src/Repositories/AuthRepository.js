import api_instance from '../helpers/api_instance'; // Import your Axios instance

export default {
    async getToken(request) {
        try {
            return await api_instance.post('/api/v1/login', request);
        } catch (error) {
            throw error;
        }
    },

    async refreshAccessToken() {
        try {
            return await api_instance.post('/api/v1/refresh');
        } catch (error) {
            throw error;
        }
    }
};