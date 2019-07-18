// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import star from './utils/star'
import store from './utils/store'

Vue.config.productionTip = false

Vue.prototype.$star = star;
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = 'http://47.100.12.168:3001/'
// Axios.defaults.baseURL = 'http://localhost:3001/'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
