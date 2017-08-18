// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify';
import App from './App'
import router from './router'
import store from './store'
import Storage from '@/common/plugins/storage';
import Service from '@/common/plugins/service';

Vue.use(Vuetify)
Vue.use(Storage)
Vue.use(Service, {
  apiUrl: process.env.API_URL,
  authUrl: process.env.AUTH_URL,
  authToken: process.env.AUTH_TOKEN
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
