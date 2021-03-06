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
import Beauty from '@/views/mobile/beauty.vue';

import PlanAdd from '@/views/mobile/plan/add.vue';
import PlanList from '@/views/mobile/plan/list.vue';

Vue.use(Router)

const routes = [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //     path: '/',
    //     name: 'index',
    //     component: Index
    // },

    {
        path: '/out',
        name: 'out',
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
        path: '/',
        name: 'leader',
        component: Leader
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
    {
        path: '/beauty',
        name: 'beauty',
        component: Beauty
    },

    {
        path: '/planadd',
        name: 'planadd',
        component: PlanAdd
    },

    {
        path: '/planList',
        name: 'planList',
        component: PlanList
    },


]
const router = new Router({
    routes
})
export default router