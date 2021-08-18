import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import vuetify from './plugins/vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})


new Vue({
  router: router,
  mode:history,
  vuetify,
  render: h => h(App)
}).$mount('#app')
