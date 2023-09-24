import Vue from 'vue'
import App from './App.vue'
import router from './router/web'
import { helper } from './helpers/helper'
Vue.config.productionTip = false

helper(router);
new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
