<template>
  <div class="home-allwork">
    <div class="logo">
      <img class="s-logo" src="./../../../assets/s-logo.png" />
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
        align="right"
      ></el-date-picker>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item>
        <span class="demonstration">办理人员</span>
        <el-select v-model="formInline.region" placeholder="请选择"></el-select>
      </el-form-item>
      <div class="bottom">
        <div class="bottom-left fl">
          <span>办理业务</span>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="出行业务"></el-checkbox>
            <el-checkbox label="签证办理"></el-checkbox>
            <el-checkbox label="指纹采集"></el-checkbox>
            <el-checkbox label="证照归还"></el-checkbox>
            <el-checkbox label="出国领汇"></el-checkbox>
            <el-checkbox label="其他业务"></el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="bottom-right">
          <span>办理业务</span>
          <el-checkbox-group v-model="checkList">
            <el-checkbox label="年"></el-checkbox>
            <el-checkbox label="月"></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </el-form>
    <div class="botton-list">
      <el-tabs type="border-card">
        <el-tab-pane label="业务统计">
          <div class="table">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="操作员">
                <template slot-scope="scope">
                  <span>{{ scope.row.member }}</span>
                </template>
              </el-table-column>
              <el-table-column label="其他业务">
                <template slot-scope="scope">
                  <span>{{ scope.row.others }}</span>
                </template>
              </el-table-column>
              <el-table-column label="出国领汇">
                <template slot-scope="scope">
                  <span>{{ scope.row.abroad }}</span>
                </template>
              </el-table-column>
              <el-table-column label="指纹采集">
                <template slot-scope="scope">
                  <span>{{ scope.row.collect }}</span>
                </template>
              </el-table-column>
              <el-table-column label="签证办理">
                <template slot-scope="scope">
                  <span>{{ scope.row.visa }}</span>
                </template>
              </el-table-column>
              <el-table-column label="证照归还">
                <template slot-scope="scope">
                  <span>{{ scope.row.back }}</span>
                </template>
              </el-table-column>
              <el-table-column label="总计">
                <template slot-scope="scope">
                  <span>{{ Number(scope.row.collect) + Number(scope.row.abroad) }}</span>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div style="width: 100%; height: 600px">
            <linegraph :id="'bargraph'" :data="option" style="height:300px;"></linegraph>
            <linegraph :id="'bargraph1'" :data="option2" style="height:300px;"></linegraph>
          </div>
        </el-tab-pane>
        <el-tab-pane label="窗口统计">窗口统计</el-tab-pane>
        <el-tab-pane label="评价统计">评价统计</el-tab-pane>
        <el-tab-pane label="导出Excel">导出Excel</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import linegraph from '../../../components/myecharts'
export default {
  name: 'home-allwork',
  data () {
    return {
      option: {
        title: {
          text: '各业务工作量分布饼图',
          x: 'left',
          y: '10%'
        },
        tooltip: {
          trigger: 'item',
          formatter: '<br/>{b} : {c} ({d}%)'
        },
        legend: {
          x: 'left',
          y: '20%',
          data: ['签证办理', '指纹采集']
        },
        calculable: true,
        series: [
          {
            type: 'pie',
            radius: [30, 110],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              {
                value: 50,
                name: '指纹采集'
              },
              {
                value: 50,
                name: '签证办理'
              }
            ]
          }
        ]
      },
      option2: {
        title: {
          text: '各业务工作量分布饼图',
          x: 'left'
        },
        xAxis: {
          type: 'category',
          data: [
            '出行业务',
            '签证办理',
            '指纹采集',
            '证照归还',
            '出国领汇',
            '其他业务'
          ]
        },
        yAxis: {
          type: 'value',
          minInterval: 1,
          max: 3
        },
        series: [
          {
            data: [0, 1, 1, 0, 0, 0],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            }
          }
        ]
      },
      checkList: ['出行业务'],
      tableData: [
        {
          member: '管理员',
          others: '0',
          abroad: '1',
          collect: '1',
          visa: '0',
          back: '0'
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: '',
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {},
  components: {
    linegraph
  }
}
</script>

<style lang="less">
.home-allwork {
  width: 99%;
  margin: 0 auto;
  padding: 10px;
  background-color: #fff;
  .fl {
    float: left;
  }
  .fr {
    float: right;
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
  .block {
    width: 50%;
    margin-left: 20px;
  }
  .demonstration {
    display: block;
    font-size: 15px;
    margin: 5px 0;
    line-height: 1;
  }
  .bottom-left {
    margin-left: 20px;
    width: 50%;
    span {
      font-size: 15px;
      display: inline-block;
    }
    .el-checkbox-group {
      margin-top: 10px;
    }
  }
  .bottom-right {
    span {
      font-size: 15px;
      display: inline-block;
    }
    .el-checkbox-group {
      margin-top: 10px;
    }
  }
  .botton-list {
    margin-top: 25px;
    margin-left: 10px;
    font-size: 16px;
  }
  .table {
    box-sizing: border-box;
    border: none;
  }
}
</style>
