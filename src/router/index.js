import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const Info = () => import('@/components/Info');
const Demo = () => import('@/components/Demo');
const About = () => import('@/components/About')

const index = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/info'
        }, {
            path: '/info',
            component: Info
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
