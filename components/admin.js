/**
 * Created by wangwenbo on 15/12/29.
 */
import Dropdown from '../bootstrap/js/dropdown.js'
import Vue from 'vue'
import Router from 'vue-router'
import App from './admin.vue'

//admin Components
import Index from './index/index.vue'
import Situation from './situation/situation.vue'
import Addstiuation from './situation/add.vue'
import Video from './video/video.vue'
import Graphic from './graphic/graphic.vue'
import Team from './team/team.vue'

//vue路由设置
Vue.use(Router);
var router=new Router();

router.map({
  '/': {
    component: Index
  },
  '/situation':{
    component:Situation
  },
  'addSituation':{
    component:Addstiuation
  },
  'video':{
    component:Video
  },
  'graphic':{
    component:Graphic
  },
  'team':{
    component:Team
  }
});

router.start(App, '#app');
