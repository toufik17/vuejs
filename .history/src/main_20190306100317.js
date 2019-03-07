import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import About from './components/About'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes : [
    {path: "/", component: Home},
    {path: "/about", component: About}
  ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router 
}).$mount('#app')
