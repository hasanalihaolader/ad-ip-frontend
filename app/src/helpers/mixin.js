import AuthRepository from "../Repositories/AuthRepository";

export default {
    data() {
        return {
            logged_in_user: {},
            data_list: {},
            is_modal_visible: false
        }
    },
    methods: {
        setLoggerInUser: function () {
            AuthRepository.getLoggedUserProfile().then(response => {
                this.$store.commit('setLoggedInUserInformation', response.data.data);
            })
        },

        getLoggedInUserName: function () {
            var logged_in_user_name = this.$store.state.logged_in_user.name;
            if (!logged_in_user_name) {
                this.setLoggerInUser();
            }
            return this.$store.state.logged_in_user.name;
        },

        formatSuccessResponseData: function (response) {
            if (response.status == 200) {
                return response.data.data
            }
            return [];
        },

        formatErrorResponse: function (error) {
            return error.response.data.message;
        },

        showModal() {
            this.is_modal_visible = true;
        },

        closeModal() {
            this.is_modal_visible = false;
        },
    }
}
