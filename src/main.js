import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {BootstrapVue} from 'bootstrap-vue'
import './assets/custom.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
