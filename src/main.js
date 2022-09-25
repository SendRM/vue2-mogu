import Vue from 'vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import App from './App.vue'
import router from './router/'
import store from './store'

import toast from 'components/common/toast'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();

Vue.use(toast);

Vue.use(ElementUI);

Vue.use(VueLazyLoad, {
  loading: require('./assets/img/common/placeholder.png')
})

FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
