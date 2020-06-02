<template>
  <div class="mobile-takeon">
    <div class="logo">
      <img src="./../../../assets/s-logo.png" />
      <span>出 国 ( 境 ) 事 务 预 约</span>
      <el-button round class="comeback" size="mini" @click="comeback">返回首页</el-button>
    </div>
    <div class="table">
        <el-form :model="ruleForm" :rules="rules"  ref="ruleForm" label-width="80px">
            <el-form-item label="姓名" prop="name">
                <el-input v-model="ruleForm.name"   placeholder="请输入姓名"></el-input>
            </el-form-item>
            <el-form-item label="单位名称" prop="region">
                <el-select v-model="ruleForm.region"  >
                <el-option label="石化盈科" value="1" selected></el-option>
                <el-option label="中石化国际部" value="2"></el-option>
                <el-option label="外管局" value="3"></el-option>
                <el-option label="路引天下" value="4"></el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <div class="addcontent">
            <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
                <div class="group-number"  v-for="(item,k) in numberList" :key="k">
                <el-button type="danger" icon="el-icon-delete" circle @click="open" class="delete" size="mini"></el-button>
                    <el-form-item label="团组号" prop="groupNumber">
                        <el-input v-model="ruleForm.groupNumber" placeholder="请输入团组号"></el-input>
                    </el-form-item>
                    <h3>办理业务:</h3>
                    <el-table
                        ref="multipleTable"
                        :data="tableData"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                        <el-table-column
                        type="selection"
                    >
                        </el-table-column>
                        <el-table-column
                        label="业务名称"
                        >
                        <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column
                        prop="number"
                        label="办理人数"
                        width="250">
                        <template slot-scope="scope">
                            <el-input-number size="mini" @change="changeNum(scope.row.id,$event)" :step="scope.row.step" :min="scope.row.min" :max="scope.row.max" v-model="scope.row.num"></el-input-number>
                        </template>
                        </el-table-column>
                    </el-table>
                </div>
            </el-form>
            <div class="bottom-button">
                <el-button round @click="add">添加团组</el-button>
                <el-button type="success" @click="submitForm('ruleForm')" style="background-color:#146639; float:right">取号</el-button>
            </div>
        </div>
        <div class="foot">
        <p>© <span>2019</span> 北京路引天下科技发展有限责任公司</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'mobile-takeon',
  data () {
    return {
      tableData: [{
        name: '出行业务',
        number: '1'
      }, {
        name: '签证办理',
        number: '1'
      }],
      multipleSelection: [],
      detailSize: [],
      numberList: 1,
      ruleForm: {
        name: '',
        region: '',
        groupNumber: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择公司名称', trigger: 'change' }
        ],
        groupNumber: [
          { required: true, message: '请填写团组号', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    comeback () {
      this.$router.push('/Mobile')
    },
    submitForm (ruleForm) {
      this.$refs.ruleForm.validate(async (valid) => {
        if (valid) {
          alert('取号成功')
        }
      })
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    getData () {
      axios.get('http://localhost:8080/dataList').then(res => {
        this.detailSize = res.data
        this.detailSize.map((v, i) => {
          v.id = i
          // v.num=0   刚开始这样赋值，不可行
          this.$set(v, 'num', 1) // 必须要这样赋值
          v.final = v.default + v.num
        })
        console.log(this.detailSize)
      })
    },
    changeNum (id, val) {
      this.detailSize.map(v => {
        if (id === v.id) {
          v.final = v.default + val
        }
      })
    },
    open () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }).then(() => {
        if (this.numberList <= 1) {
          this.message({
            type: 'info',
            message: '不可删除'
          })
        }
        this.numberList--
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    add () {
      this.numberList++
    }
  }
}
</script>

<style lang="less">
body {
  width: 100%;
  .mobile-takeon {
    width: 100%;
    position: relative;
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
    }
    .table {
        width: 96%;
        margin: 0 auto;
    }
    .group-number {
        border: 1px solid #ebebeb;
        border-radius: 4px;
        background-color: #fff;
        padding:15px;
        padding-top: 50px;
        margin-top: 10px;
        h3 {
            font-weight: 400;
        }
        .delete {
            float: right;
            margin-top: -40px;
        }
    }
    .bottom-button {
        margin-top: 40px;
    }
    .el-form-item__label {
          font-size: 14px !important;
          width: 80px !important;
    }
    .foot {
      text-align: center;
      p {
        color: #989898;
      }
    }
    .comeback {
        position: absolute;
        top: -4%;
        left: 70%;
      }
  }
  .el-message-box {
    width: 85% !important;
  }
}
</style>
