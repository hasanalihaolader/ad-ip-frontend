import helper from "../helpers/helper";
export function authentication(router) {
    router.beforeEach((to, from, next) => {
        if (to.meta.require_auth && !helper.isAuthenticated()) {
            next({ name: 'Login' });
        } else {
            if(to.name == 'Login' && helper.isAuthenticated())
            {
                next({ name: 'Dashboard' });
            }
            next();
        }
    });
}