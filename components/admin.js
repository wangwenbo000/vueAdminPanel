/**
 * Created by wangwenbo on 15/12/29.
 */
import Dropdown from '../bootstrap/js/dropdown.js'
import Tab from '../bootstrap/js/tab.js'
import Vue from 'vue'
import Router from 'vue-router'
import VueValidator from 'vue-validator'
import App from './admin.vue'

//admin Components
import Index from './index/index.vue'
import Situation from './situation/situation.vue'
import Addstiuation from './situation/add.vue'
import Video from './video/video.vue'
import AddVideo from './video/add.vue'
import Graphic from './graphic/graphic.vue'
import addGraphic from './graphic/add.vue'
import Team from './team/team.vue'
import addMember from './team/add.vue'
import Job from './job/job.vue'
import addJob from './job/add.vue'
import Photos from './photos/photos.vue'
import addPhotos from './photos/add.vue'

//vue路由设置
Vue.use(Router);
Vue.use(VueValidator);

var router=new Router();

router.map({
  '/': {
    name: 'Index',
    component: Index
  },
  '/situation': {
    name: 'situation',
    component: Situation
  },
  'addSituation': {
    name: 'situation',
    component: Addstiuation
  },
  'video': {
    name: 'video',
    component: Video
  },
  'addVideo': {
    name: 'video',
    component: AddVideo
  },
  'graphic': {
    name: 'graphic',
    component: Graphic
  },
  'addGraphic': {
    name: 'graphic',
    component: addGraphic
  },
  'team': {
    name: 'team',
    component: Team
  },
  'addMember': {
    name: 'team',
    component: addMember
  },
  'job':{
    name:'job',
    component:Job
  },
  'addJob':{
    name:'job',
    component:addJob
  },
  'photos':{
    name:'photos',
    component:Photos
  },
  'addPhotos':{
    name:'photos',
    component:addPhotos
  }
});

router.start(App, '#app');
