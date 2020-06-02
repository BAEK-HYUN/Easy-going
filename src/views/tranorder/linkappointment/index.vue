<template>
  <div class="home-linkappointment">
    <div class="logo">
     <img class="s-logo" src="./../../../assets/s-logo.png">
     <span>出国(境)事务预约</span>
   </div>
   <div class="block fl">
    <span class="demonstration">预约领汇时间</span>
    <el-date-picker
      v-model="value2"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="─"
      start-placeholder=""
      end-placeholder=""
      :picker-options="pickerOptions">
    </el-date-picker>
  </div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline fl">
    <el-form-item label="预约人员">
      <el-input v-model="formInline.user" placeholder="请输入预约人员姓名" style="width:300px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
      <el-button @click="resetForm('ruleForm')">清空</el-button>
    </el-form-item>
  </el-form>
  <el-table
    ref="filterTable"
    :data="tableData"
    border=""
    style="width: 100%">
    <el-table-column
      prop="date"
      label="预约时间"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
      <el-table-column
      prop="date"
      label="预约启程日期"
      sortable
      width="180"
      column-key="startDate"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}]"
      :filter-method="filterHandler"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="预约人"
      width="180">
    </el-table-column>
    <el-table-column
      prop="company"
      label="单位名称"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="date"
      label="团组号"
      sortable
      width="180"
      column-key="number"
    >
    </el-table-column>
    <el-table-column
      prop="date"
      label="身份证号"
      sortable
      width="180"
      column-key="ID"
    >
    </el-table-column>
     <el-table-column
      prop="company"
      label="国家▪人数▪天数"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '公司1', value: '公司1' }, { text: '公司2', value: '公司2' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '公司1' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.tag}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
export default {
  name: 'home-linkappointment',
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
      },
      tableData: []
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    formatter (row, column) {
      return row.address
    },
    filterTag (value, row) {
      return row.tag === value
    },
    filterHandler (value, row, column) {
      const property = column.property
      return row[property] === value
    }
  }
}
</script>

<style lang="less">
.home-linkappointment {
  width:99%;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  .fl {
    float: left;
  }
  .logo {
    position: relative;
    margin-bottom: 10px;
    font-size: 16px;
    .s-logo {
      vertical-align: middle;
      display: inline-block;
      width: 40px;
      margin-right: 10px;
    }
  }
  .block {
    margin-right: 50px;
    .demonstration {
      margin-right: 10px;
    }
  }
}
</style>
