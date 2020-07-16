import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './assets/custom.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import index from './router'

Vue.use(VueAxios, axios);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
    router: index,
    render: h => h(App),
}).$mount('#app')
