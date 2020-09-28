import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//mobile
import Index from '@/views/mobile/index.vue';
import Leader from '@/views/mobile/leader.vue';
import List from '@/views/mobile/list.vue';
import Upload from '@/views/mobile/upload.vue';
import Count from '@/views/mobile/count.vue';

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
        path: '/upload',
        name: 'upload',
        component: Upload
    },
    {
        path: '/list',
        name: 'list',
        component: List
    },

    {
        path: '/leader',
        name: 'leader',
        component: Leader
    },

    {
        path: '/count',
        name: 'count',
        component: Count
    },

]
const router = new Router({
    routes
})
export default router