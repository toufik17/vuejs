import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Router = new VueRouter({
  routes : [
    {path: '/', cpmponent: Hom}
    {path: '/', cpmponent: Hom}
  ]
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
