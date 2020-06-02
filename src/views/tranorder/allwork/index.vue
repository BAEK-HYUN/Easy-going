<template>
  <div class="home-allwork">
    <div class="logo">
     <img class="s-logo" src="./../../../assets/s-logo.png">
     <span>出国(境)事务预约</span>
   </div>
   <div class="block fl">
    <span class="demonstration">办理日期</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
  <el-form-item >
    <span class="demonstration">办理人员</span>
    <el-select v-model="formInline.region" placeholder="请选择">
    </el-select>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  name: 'home-allwork',
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
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      formInline: {
        user: '',
        region: ''
      }
    }
  }
}
</script>

<style lang="less">
.home-allwork {
  width:99%;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  .fl {
    float: left;
  }
  .logo {
    position: relative;
    margin-bottom: 20px;
    font-size: 16px;
    .s-logo {
      vertical-align: middle;
      display: inline-block;
      width: 40px;
      margin-right: 10px;
    }
  }
  .block{
    width: 50%;
    margin-left: 20px;
  }
  .demonstration {
    display: block;
    font-size: 15px;
    margin:5px 0;
    line-height: 1;
  }
}
</style>
