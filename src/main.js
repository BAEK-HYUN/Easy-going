import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 自己的样式，注意写在饿了么样式下方，才能覆盖样式
import '@/styles/index.less'
// 导入 自己配置的 axios
// import axios from '@/api'
import axios from 'axios'
// 时间格式化
import moment from 'moment'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 挂载 $http 对象就是axios
Vue.prototype.$http = axios
Vue.filter('dateformat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
