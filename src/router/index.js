import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Overview = () => import('@/components/Overview');
const Demo = () => import('@/components/Demo');
const About = () => import('@/components/About')

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
        }, {
            path: '/about',
            component: About
        }
    ]
});

export default index;
