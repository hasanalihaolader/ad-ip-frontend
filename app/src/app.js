import Vue from 'vue';
import Vuex from 'vuex';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router/web';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { authentication } from './Middleware/Authentication';
import { dynamicPageTitle } from './Middleware/DynamicPageTitle';
import store from './store/index';
import helperClass from './helpers/helper';
import mixin from './helpers/mixin';

Vue.prototype.$helpers = helperClass
Vue.prototype.$setErrorsFromResponse = helperClass.setValidationErrorToVeeValidator
Vue.config.productionTip = false

Vue.use(VeeValidate);
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.mixin(mixin);


authentication(router);
dynamicPageTitle(router);
new Vue({
  router,
  store: store,
  render: function (h) { return h(App) }
}).$mount('#app')
