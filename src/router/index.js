import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//mobile
import Index from '@/views/mobile/index.vue';
import Leader from '@/views/mobile/leader.vue';

Vue.use(Router)

const routes = [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
        path: '/',
        name: 'index',
        component: Index
    },

    {
        path: '/leader',
        name: 'leader',
        component: Leader
    },

]
const router = new Router({
    routes
})
export default router