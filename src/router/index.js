import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Overview = () => import('@/components/Overview');
const Demo = () => import('@/components/Demo');

const index = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/overview'
        }, {
            path: '/overview',
            component: Overview
        }, {
            path: '/demo',
            component: Demo
        }
    ]
});

export default index;
