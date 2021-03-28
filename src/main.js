import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'
import store from './stores'

Vue.config.productionTip = false

Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store: store(Vuex)
}).$mount('#app')
