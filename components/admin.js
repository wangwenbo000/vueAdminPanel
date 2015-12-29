/**
 * Created by wangwenbo on 15/12/29.
 */
import Vue from 'vue'
import Router from 'vue-router'
import App from './admin.vue'

//admin Components

import Index from './index/index.vue'

//vue路由设置
Vue.use(Router);
var router=new Router();

router.map({
  '/': {
    component: Index
  }
});

router.start(App, '#app');
