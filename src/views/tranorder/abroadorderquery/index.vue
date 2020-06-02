<template>
 <div class="home-abroadorderquery">
   <div class="logo">
     <img class="s-logo" src="./../../../assets/s-logo.png">
     <span>出国(境)事务预约</span>
   </div>
    <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort = "{prop: 'date', order: 'descending'}"
    >
    <el-table-column
      prop="id"
      label="序号"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="company"
      label="单位名称"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="idCard"
      label="身份证号"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="date"
      label="预约日期"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="member"
      label="长期人员"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="toDo"
      label="操作"
      :formatter="formatter">
    </el-table-column>
  </el-table>
   <div class="button">
     <el-button @click="open1">新增长期人员</el-button>
     <el-button @click="open2">打印预览</el-button>
   </div>
 </div>
</template>

<script>
export default {
  name: 'home-abroadorderquery',
  data () {
    return {
      tableData: [{
        id: '',
        company: '',
        name: '',
        idCard: '',
        date: '',
        member: '',
        toDo: ''
      }]
    }
  },
  //  Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据
  methods: {
    formatter (row, column) {
      return row.address
    },
    open1 () {
      const h = this.$createElement
      this.$msgbox({
        title: '添加长期人员',
        message: h('div', { class: 'alert-box' }, [
          h('ul', null, [
            h('li', null, [
              h('span', null, '姓名'),
              h('input', null, null)
            ]),
            h('li', null, [
              h('span', null, '单位名称'),
              h('input', null, null)
            ]),
            h('li', null, [
              h('span', null, '身份证号'),
              h('input', null, null)
            ])
          ])
        ]),
        showCancelButton: true,
        confirmButtonText: '添加',
        cancelButtonText: '取消',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '添加中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 800)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    },
    open2 () {
      const h = this.$createElement
      this.$msgbox({
        title: '打印预览',
        message: h('div', { class: 'print' }, [
          h('div', { class: 'logo' }, [
            h('span', null, '出国(境)事务预约单')
          ]),
          h('p', null, '2020年5月26日'),
          h('table', null, [
            h('tr', null, [
              h('td', null, '序号'),
              h('td', null, '单位名称'),
              h('td', null, '姓名'),
              h('td', null, '身份证号')
            ])
          ])
        ]),
        showCancelButton: true,
        confirmButtonText: '打印',
        cancelButtonText: '关闭',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true
            instance.confirmButtonText = '打印中...'
            setTimeout(() => {
              done()
              setTimeout(() => {
                instance.confirmButtonLoading = false
              }, 300)
            }, 1000)
          } else {
            done()
          }
        }
      }).then(action => {
        this.$message({
          type: 'info',
          message: 'action: ' + action
        })
      })
    }
  }
}
</script>

<style lang="less">
.home-abroadorderquery {
  width:99%;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
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
  .button{
    text-align: center;
    margin-top: 30px;
    .el-button:first-child {
      margin-right: 60px;
      margin-bottom: 60px;;
    }
  }
}
.alert-box{
  color: #333;
  ul {
    padding-right: 20px;
    li {
      list-style: none;
      margin-bottom: 20px;
      span{
        display: inline-block;
        text-align: right;
        width: 60px;
        padding-right: 10px;
      }
      input {
        height: 30px;
        border: 1px solid #e6e6e6;
        border-radius: 2px;
      }
    }
  }
}
.print {
  width: 98%;
  margin: 0 auto;
  color: #333;
  .logo {
    text-align: center;
    span {
      font-size: 24px;
      margin-left: 20px;
    }
  }
  p {
    text-align: right;
    font-size: 15px;
    padding:20px 0 ;
  }
  table {
    width: 100%;
    border: 1px solid #e6e6e6;
    border-collapse:collapse;
    tr {
      td {
        width: 25%;
        height: 40px;
        color: #666;
        border: 2px solid #e6e6e6;
        background-color: #eee;
        padding-left: 10px;
      }
    }
  }
}
</style>
