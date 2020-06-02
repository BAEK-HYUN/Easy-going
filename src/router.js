import Vue from 'vue'
import VueRouter from 'vue-router'
// 工具
import auth from '@/utils/auth'
// 引入组件
import Home from '@/views/home'
import Login from '@/views/login'

// 海外队伍
import Createteam from '@/views/abroadteam/createteam'
import Createteamconfig from '@/views/abroadteam/createteamconfig'
import Teamlist from '@/views/abroadteam/teamlist'
// 预约
import Abroadorderquery from '@/views/tranorder/abroadorderquery'
import Abroadwechat from '@/views/tranorder/abroadwechat'
import Allwork from '@/views/tranorder/allwork'
import Linkappointment from '@/views/tranorder/linkappointment'
// 排队
import Businessenquiry from '@/views/queuing/businessenquiry'
import Call from '@/views/queuing/call'
import Queuwechat from '@/views/queuing/queuwechat'
// 企业微信
import Wechatlist from '@/views/companywechat/wechatlist'
// 通知管理
import Norelease from '@/views/notic/norelease'
import Release from '@/views/notic/release'
// 配置
import Businessconfig from '@/views/config/businessconfig'
import Userconfig from '@/views/config/userconfig'
// 信息平台
import TrackIndex from '@/views/trackIndex'
// 人员分布
import TrackDistributing from '@/views/trackDistributing'
// 行踪轨迹
import TrackTrajectory from '@/views/trackTrajectory'
// 系统设置
import SystemConfig from '@/views/systemConfig'
// 大屏展示
import Alidata from '@/views/aliData'
// 404
import NotFound from '@/views/404'
// 通知公告
import Firtone from '@/views/login-tips'
// 事务预约-手机端
import Mobile from '@/views/home/mobile_index'
// 手机端 访客预约
import Myorder from '@/views/mobile/myorder'
// 手机端 排队取号
import Takeon from '@/views/mobile/takeon/index.vue'
// 手机端 我的预约
import Myplans from '@/views/mobile/myplans/index.vue'
// 手机端 我的取号
import Mynumber from '@/views/mobile/mynumber/index.vue'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/createteam', component: Createteam },
      { path: '/abroadorderquery', component: Abroadorderquery },
      { path: '/createteamconfig', component: Createteamconfig },
      { path: '/abroadwechat', component: Abroadwechat },
      { path: '/allwork', component: Allwork },
      { path: '/linkappointment', component: Linkappointment },
      { path: '/teamlist', component: Teamlist },
      { path: '/businessenquiry', component: Businessenquiry },
      { path: '/call', component: Call },
      { path: '/queuwechat', component: Queuwechat },
      { path: '/wechatlist', component: Wechatlist },
      { path: '/norelease', component: Norelease },
      { path: '/release', component: Release },
      { path: '/businessconfig', component: Businessconfig },
      { path: '/userconfig', component: Userconfig },
      { path: '/trackIndex', component: TrackIndex },
      { path: '/trackDistributing', component: TrackDistributing },
      { path: '/trackTrajectory', component: TrackTrajectory },
      { path: '/systemConfig', component: SystemConfig },
      { path: '/alidata', component: Alidata }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/login-tips',
    component: Firtone
  },
  {
    path: '/Mobile',
    component: Mobile
  },
  // 访客预约
  { path: '/myorder', component: Myorder },
  // 排队取号
  { path: '/takeon', component: Takeon },
  // 我的预约
  { path: '/myplans', component: Myplans },
  // 我的取号
  { path: '/mynumber', component: Mynumber },
  // 通配规则（以上所有的规则不符合的时候，走这个规则）
  { path: '*', component: NotFound }
]

var router = new VueRouter({
  routes
})
// 前置导航守卫
router.beforeEach((to, from, next) => {
  // 如果你不是登录页面，而且你没有token，拦截到登录页面
  if (to.path !== '/login' && !auth.getUser().access_token) return next('/login')
  // 其他情况放行
  next()
})
export default router
