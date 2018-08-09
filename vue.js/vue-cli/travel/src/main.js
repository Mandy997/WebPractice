import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import routes from './router/index'

//重置默认样式
import 'normalize.css'
// 1像素的边框解决方案
import './assets/style/border.css'

// 移动端300ms 点击事件延迟解决方案，使用fastclick 库
import fastClick from 'fastclick'

Vue.use(VueRouter);
Vue.config.productionTip = false;
fastClick.attach(document.body);

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})


new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
})