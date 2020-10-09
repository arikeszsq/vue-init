import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//mobile
import Index from '@/views/mobile/index.vue';
import Leader from '@/views/mobile/leader.vue';
import List from '@/views/mobile/list.vue';
import Upload from '@/views/mobile/upload.vue';
import Count from '@/views/mobile/count.vue';
import Add from '@/views/mobile/add.vue';
import Learn from '@/views/mobile/learn.vue';
import Alladd from '@/views/mobile/all/add.vue';
import Alllist from '@/views/mobile/all/list.vue';
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
        path: '/add',
        name: 'add',
        component: Add
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
    {
        path: '/learn',
        name: 'learn',
        component: Learn
    },
    {
        path: '/alladd',
        name: 'alladd',
        component: Alladd
    },
    {
        path: '/alllist',
        name: 'alllist',
        component: Alllist
    },
]
const router = new Router({
    routes
})
export default router