import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueCookies from "vue-cookies";

import ElementUI from 'element-ui';
import'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js';




Vue.use(VueCookies);

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://81.70.132.82:16384'
Vue.prototype.$http = axios
Vue.config.productionTip = false
axios.defaults.withCredentials = true;// 允许跨域携带cookie

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
