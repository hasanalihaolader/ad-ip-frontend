import api_instance from '../helpers/api_instance'; // Import your Axios instance

export default {
    // Fetch a list of users
    async getToken(request) {
        try {
            return await api_instance.post('/api/v1/login', request);
        } catch (error) {
            throw error;
        }
    },

    // Other CRUD methods can be added here
};