<template>
  <div class="mobile-takeon">
    <div class="logo">
      <img src="./../../../../public/img/s-logo.png" />
      <span>出 国 ( 境 ) 事 务 预 约</span>
      <el-button round class="comeback" size="mini" @click="comeback">返回首页</el-button>
    </div>
    <div class="table">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item label="姓名" prop="name" style="display:inline-block">
          <el-input v-model="ruleForm.name" placeholder="请输入姓名" style="width:58%"></el-input>
        </el-form-item>
        <el-form-item label="单位名称" prop="region">
          <el-select v-model="ruleForm.region" filterable>
            <el-option label="石化盈科" value="1" selected></el-option>
            <el-option label="中石化国际部" value="2"></el-option>
            <el-option label="外管局" value="3"></el-option>
            <el-option label="路引天下" value="4"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="addcontent">
        <el-form ref="ruleForm" :model="ruleForm" label-width="80px" :rules="rules">
          <div class="group-number" v-for="(item,k) in numberList" :key="k">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="open"
              class="delete"
              size="mini"
            ></el-button>
            <el-form-item label="团组号" prop="groupNumber" style="margin-top:10px">
              <el-input v-model="ruleForm.groupNumber" placeholder="请输入团组号"></el-input>
            </el-form-item>
            <!-- 办理业务 -->
            <!-- <el-form-item label="办理业务" prop="list">
              <el-select v-model="ruleForm.list" filterable multiple style="width:100%">
                <el-option label="出行业务" value="1" selected></el-option>
                <el-option label="指纹采集" value="2"></el-option>
                <el-option label="证照归还" value="3"></el-option>
                <el-option label="签证办理" value="4"></el-option>
                <el-option label="港澳证注" value="5"></el-option>
                <el-option label="其他业务" value="6"></el-option>
              </el-select>
            </el-form-item>-->
            <!-- 办理人数 -->
            <!-- <el-form-item label="办理人数" prop="list">
            </el-form-item>-->
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange"
            >
              <el-table-column type="selection" width="45"></el-table-column>
              <el-table-column label="办理业务" width="120">
                <template slot-scope="scope">{{ scope.row.business }}</template>
              </el-table-column>
              <el-table-column prop="num" label="办理人数" width="140">
                <template slot-scope="scope">
                    <el-input-number size="mini" @change="changeNum(scope.row.id,$event)" :step="scope.row.step" :min="scope.row.min" :max="scope.row.max" v-model="scope.row.num"></el-input-number>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-form>
        <div class="bottom-button">
          <el-button round @click="add">添加团组</el-button>
          <el-button
            type="success"
            @click="submitForm('ruleForm')"
            style="background-color:#146639; float:right"
          >取号</el-button>
        </div>
      </div>
      <div class="foot">
        <p>
          ©
          <span>2019</span> 北京路引天下科技发展有限责任公司
        </p>
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
        business: '出行业务',
        num: '',
        min: 0
      }, {
        business: '指纹采集',
        num: '',
        min: 0
      }, {
        business: '证照归还',
        num: '',
        min: 0
      }, {
        business: '签证办理',
        num: '',
        min: 0
      }, {
        business: '港澳证注',
        num: '',
        min: 0
      },
      {
        business: '其他业务',
        num: '',
        min: 0
      }
      ],
      multipleSelection: [],
      detailSize: [],
      numberList: 1,
      num: 1,
      min: 0,
      ruleForm: {
        name: '',
        region: '',
        groupNumber: '',
        list: ''
      },
      rules: {
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
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
      this.$refs.ruleForm.validate(async valid => {
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
      })
        .then(() => {
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
        })
        .catch(() => {
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
      width: 80%;
      border: 1px solid #ebebeb;
      border-radius: 4px;
      background-color: #fff;
      padding: 15px;
      padding-top: 50px;
      margin: 0 auto;
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
    p {
      width: 100% !important;
    }
  }
}
</style>
