<template>
  <div class="mobile-myplans">
    <div class="logo">
      <img src="./../../../assets/s-logo.png" />
      <span>出 国 ( 境 ) 事 务 预 约</span>
      <el-button round class="comeback" size="mini" @click="comeback">返回首页</el-button>
    </div>
    <div class="content">
        <div class="block" >
          <span class="demonstration">开始时间</span>
          <el-date-picker
            v-model="value1"
            type="date"
            @change="start"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="block" >
          <span class="demonstration">截止时间</span>
          <el-date-picker
            v-model="value2"
            type="date"
            @change="end"
            placeholder="选择日期">
          </el-date-picker>
        </div>
        <div class="text" v-for="(item,k) in list" :key="k">
            <div v-for="o in any" :key="o" class="text item">
              <ul>
                <li><span>预约时间 : </span> {{item.date }}</li>
                <li><span>姓名 :</span> {{item.name }}</li>
                <li><span>单位名称 :</span> {{item.company }}</li>
                <li><span>身份证号码 :</span> {{item.id }}</li>
                <li><span>办理团组号 :</span> {{item.num }}</li>
                <li><span>办理业务 :</span> <i>{{item.todo }}</i></li>
              </ul>
            </div>
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
      value2: '',
      list: '',
      any: 1
    }
  },
  methods: {
    comeback () {
      this.$router.push('/Mobile')
    },
    start () {
      console.log(this.value1)
    },
    end () {
      var day = new Date(2019, 11, 1)
      if (this.value1 < day) {
        this.list = [
          { date: '2019-09-25', name: '测试', company: '路引天下', id: 320926195511175276, num: 123456, todo: '签注办理 指纹采集 证照归还 出行业务' },
          { date: '2019-10-25', name: '测试', company: '路引天下', id: 320926195511175276, num: 123456, todo: '签注办理 出行业务 指纹采集' },
          { date: '2019-11-25', name: '测试', company: '路引天下', id: 320926195511175276, num: 123456, todo: '出行业务' },
          { date: '2019-12-25', name: '测试', company: '路引天下', id: 320926195511175276, num: 123456, todo: '签注办理 指纹采集' }]
      }
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
            width: 100%;
            text-align: center;
            p {
                color: #989898;
            }
        }
        .content {
            width: 100%;
            .block {
                margin: 0 auto;
                margin-bottom: 10px;
                margin-left: 40px;
                span{
                  margin-right: 10px;
                }
            }
        }
        .text {
          width: 80%;
          margin: 0 auto;
          background-color: #fff;
          border-radius: 4px;
          ul {
            width: 100%;
            text-align: left;
            li {
              list-style: none;
              line-height: 30px;
              span {
                display: inline-block;
                width: 80px;
                text-align: right;
              }
              i {
                width: 50%;
                vertical-align: top;
                font-style: normal;
                display: inline-block;
                word-wrap: break-word;
                word-break: normal;
              }
            }
          }
        }
        .el-card__body {
          width: 50% !important;
        }
    }
}
</style>
