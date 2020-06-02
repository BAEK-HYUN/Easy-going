<template>
  <div class="mobile-myplans">
    <div class="logo">
      <img src="./../../../assets/s-logo.png" />
      <span>出 国 ( 境 ) 事 务 预 约</span>
      <el-button round class="comeback" size="mini" @click="comeback">返回首页</el-button>
    </div>
    <div class="content">
        <div class="block">
            <span class="demonstration" style="display:inline-block; font-size:16px; margin-bottom:20px; margin-right:40px">我的预约</span>
            <el-date-picker
            v-model="value2"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
            </el-date-picker>
        </div>
    </div>
    <div class="foot">
        <p>© <span>2019</span> 北京路引天下科技发展有限责任公司</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-plans',
  data () {
    return {
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      value1: '',
      value2: ''
    }
  },
  methods: {
    comeback () {
      this.$router.push('/Mobile')
    }
  }
}
</script>

<style lang="less">
body {
    width: 100%;
    .mobile-myplans {
        width: 100%;
            .logo {
                margin-top: 40px;
                margin-left: 40px;
                margin-bottom: 40px;
                height: 65px;
                img {
                    height: 100%;
                    margin-right: 20px;
                    vertical-align: middle;
                }
                span {
                    font-size: 16px;
                }
                .comeback {
                    position: absolute;
                    top: 2%;
                    left: 70%;
                }
        }
        .foot {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            p {
                color: #989898;
            }
        }
        .content {
            width: 100%;
            .block {
                width: 96%;
                margin: 0 auto;
            }
        }
    }
    .el-picker-panel__body-wrapper {
        max-width: 630px;
    }
    .el-date-range-picker.has-sidebar {
        width: 580px;
    }
    .el-picker-panel__shortcut{
        font-size: 8px;
    }
    .el-picker-panel__sidebar{
        width: 12%;
    }
    .el-picker-panel__body {
        width: 50%;
        margin-left: 63px !important;
    }
}
</style>
