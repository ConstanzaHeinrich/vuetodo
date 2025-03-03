import Vue from 'vue'
import App from './App.vue'
import router from './router'
// Importar ElementUI y archivos CSS.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// ElementUI.
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

