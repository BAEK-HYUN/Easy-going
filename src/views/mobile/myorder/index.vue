<template>
  <div class="mobile-myorder">
    <div class="logo">
      <img src="./../../../../public/img/s-logo.png" />
      <span>出 国 ( 境 ) 事 务 预 约</span>
      <el-button round class="comeback" size="mini" @click="comeback">返回首页</el-button>
    </div>
    <el-form ref="form" :model="form" :rules="rules"  label-width="80px" class="content">
          <el-form-item label="办理业务" prop="region">
              <el-select v-model="form.region" placeholder="请选择" filterable multiple>
              <el-option label="出行业务" value="1"></el-option>
              <el-option label="签证办理" value="2"></el-option>
              <el-option label="指纹采集" value="3"></el-option>
              <el-option label="证件归还" value="4"></el-option>
              <el-option label="出国领汇" value="5"></el-option>
              <el-option label="业务办理" value="6"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="预约日期" prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 79%;" class="date"></el-date-picker>
          </el-form-item>
          <el-form-item label="团组号" prop="num">
            <el-input v-model="form.num" placeholder="请输入团组号" style="width: 79%;"></el-input>
          </el-form-item>
    <div class="table">
        <h3>人员表</h3>
        <el-table :data="tabledatas" border >
            <el-table-column label="姓名" width="78">
                <template slot-scope="scope">
                    <el-input v-show="scope.row.show" v-model="scope.row.name" style="padding:0"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.name}}</span>
                </template>
            </el-table-column>
            <el-table-column label="身份证号" width="160">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.id"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column label="单位名称" width="135">
                <template slot-scope="scope">
                    <el-input placeholder="请输入内容" v-show="scope.row.show" v-model="scope.row.company"></el-input>
                    <span v-show="!scope.row.show">{{scope.row.company}}</span>
                </template>
            </el-table-column>
            <!-- <el-table-column label="操作" width="150">
                <template slot-scope="scope">
                  <el-button @click="edit(scope.row,scope.$index)" type="warning" icon="el-icon-check"  round size="mini" class="edit">{{scope.row.show?'保存':"修改"}}</el-button>
                </template>
            </el-table-column> -->
        </el-table>
    </div>
    </el-form>
    <div class="submit">
       <el-button type="success" @click="submitForm('form')"  style="background-color:#146639;">提交预约</el-button>
    </div>
    <ul>
        <li>1. 银行工作时间为9：30-11:30、13:00-16:00，周末及国家法定节假日不能领汇。</li>
        <li>2. 出国领汇必须提前2个工作日预约，一次领汇超1万美元需提前3个工作日预约。</li>
    </ul>
    <div class="foot">
       <p>© <span>2019</span> 北京路引天下科技发展有限责任公司</p>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: 'mobile-myorder',
  data () {
    return {
      tabledatas: [{
        name: '',
        id: '',
        company: '',
        show: true
      }],
      form: {
        region: '',
        date: '',
        num: ''
      },
      rules: {
        region: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        date: [
          { required: true, message: '请选择预约时间', trigger: 'change' }
        ],
        num: [
          { required: true, message: '请填写团组号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    comeback () {
      this.$router.push('/Mobile')
    },
    submitForm (form) {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          alert('预约成功')
        }
      })
    },
    blur (row, index) {
      row.show = !row.show
      // Vue.set(this.tabledatas, index, row)
      this.$set(this.tabledatas, index, row)
      // 其他操作
    },
    deleteRow (index, rows) {
      rows.splice(index, 1)
    }
  }
}
</script>

<style lang="less">
body {
  width: 100%;
  .mobile-myorder {
    width: 100%;
    .logo {
      margin-top: 40px;
      margin-left: 40px;
      height: 65px;
      img {
        height: 100%;
        margin-right: 20px;
        vertical-align: middle;
      }
      span {
        font-size: 16px;
      }
    }
    .content {
      margin: 20px;
    }
    .table {
      width: 375px;
        h3 {
            font-size: 16px;
            font-weight: normal;
            padding-bottom: 10px;
            border-bottom: 1px solid #e6e6e6;
        }
        input {
          border: none;
          padding: 0;
        }
    }
    ul {
        width: 90%;
        margin-top: 40px;
        text-align: center;
        li {
            list-style: none;
        }
    }
    .foot{
      width: 100%;
      text-align: center;
      p {
          color: #989898;
          margin-top: 100px;
      }
    }
    .submit {
      width: 100%;
      text-align: center;
    }
    .edit {
      font-size: 14px;
    }
    .el-form-item__label {
          font-size: 14px !important;
          width: 80px !important;
    }
    .comeback {
      position: absolute;
      top: 2%;
      left: 70%;
    }
  }
  .fl {
    float: left;
  }
}
</style>
