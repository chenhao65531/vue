import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import VueRouter  from 'vue-router'
import router from './router'
import { Overlay } from 'vant';
import { Card } from 'vant';
import { Popup } from 'vant';
import { Toast } from 'vant';

Vue.use(Popup);

Vue.use(Toast);

Vue.use(Card);

Vue.use(Overlay);

Vue.use(Vant);
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router:router
}).$mount('#app')
