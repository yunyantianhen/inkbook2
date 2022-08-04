import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui';
import'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://81.70.132.82:16384/admin/'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
