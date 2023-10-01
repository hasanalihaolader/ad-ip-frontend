export function dynamicPageTitle(router) {
    router.beforeEach((to, from, next) => {
        window.document.title = to.meta.page_title !== undefined ? to.meta.page_title : 'Home';
        next();
    });
}


