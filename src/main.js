import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import './styles/base.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Fragment from 'vue-fragment'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Fragment.Plugin);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
