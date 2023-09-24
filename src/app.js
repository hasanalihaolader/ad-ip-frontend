import Vue from 'vue'
import VeeValidate from 'vee-validate';
import App from './App.vue'
import router from './router/web'
import { helper } from './helpers/helper'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false
Vue.use(VeeValidate);
Vue.use(VueAxios, axios)

helper(router);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
