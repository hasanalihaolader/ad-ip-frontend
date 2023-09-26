import api_instance from '../helpers/api_instance'; // Import your Axios instance

export default {
    async fetch(request) {
        try {
            return await api_instance.get('/api/v1/ip');
        } catch (error) {
            throw error;
        }
    },

    async createOrUpdate(request, verb, updatable_id) {
        try {
            if (request && updatable_id) {
                if (verb == 'update') {
                    return await api_instance.patch('/api/v1/ip/update/' + updatable_id, request);
                }
                return await api_instance.post('/api/v1/ip/create', request);

            }
        } catch (error) {
            throw error;

        }
    },

    async getById(id) {
        try {
            if (id) {
                return await api_instance.get('/api/v1/ip/' + id);
            }
        } catch (error) {
            throw error;

        }
    }
};