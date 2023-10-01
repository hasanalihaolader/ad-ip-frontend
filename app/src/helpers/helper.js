export default {
    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    getCookie(cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    isAuthenticated() {
        return this.getCookie('token');
    },
    deleteCookie(cookieName) {
        document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    setValidationErrorToVeeValidator(errorResponse) {
        if (!this.hasOwnProperty('$validator')) {
            return;
        }
        this.$validator.errors.clear();
        let errorFields = Object.keys(errorResponse);
        errorFields.map(field => {
            let errorString = errorResponse[field].join(', ');
            this.$validator.errors.add({
                field: field,
                msg: errorString
            });
        });
    }
}
