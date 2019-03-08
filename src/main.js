import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './routes'
import store from "./store/index"

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: "history",
  routes : routes
})

router.beforeEach((to, from, next) => {
  next();
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
