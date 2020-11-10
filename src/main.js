// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios';

import { Lazyload } from 'vant';
Vue.use(Lazyload);

import { Col, Row } from 'vant';

Vue.use(Col);
Vue.use(Row);


import { Tab, Tabs } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);


Vue.prototype.axios = axios;
// axios.defaults.baseURL = "http://101.133.161.125/api/vue"; // 关键步骤–填写后台请求统一的地址
axios.defaults.baseURL = "http://zhusq.local/api/vue"; // 关键步骤–填写后台请求统一的地址
Vue.use(Vant);
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})