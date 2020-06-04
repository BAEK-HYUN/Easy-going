<template>
  <div class="container-login">
    <!-- 头部 -->
        <header>
          <img src="./../../../public/img/logo.png" alt="">
        </header>
        <div class="banner">
        <div class="content w">
            <div class="up">
                <div class="announcement fl">
                    <el-divider content-position="left">通知公告</el-divider>
                    <ul>
                      <!-- 跳转页 -->
                      <li>
                        <img src="./../../../public/img/1.jpg" class="fl">
                        <el-link href="http://localhost:8080/#/login-tips" target="_blank" style="color:#EE2C2C;">致海外干部员工及家属的一封信</el-link>
                        <p style="color:#fff">疫情期间，集团广大干部员工众志成城，内部筑起疫情防控的钢铁长城，外部驰援70多家抗疫工程，更以高质量复工复产鼎力支持国家经济社会发展。这些也...</p>
                        <el-link href="http://localhost:8080/#/login-tips" target="_blank" style="color: #EE2C2C ;" class="ditail">[详情]</el-link>
                      </li>
                      <!-- 弹出框 -->
                      <li v-for="(item, index) in lis" :key="index">
                        <el-link :underline="false" @click="open" class="alert-box">{{ item._title }}</el-link>
                          <span class="time">{{ new Date() | dateformat('YYYY-MM-DD')}}</span>
                      </li>
                      <!-- 下载链接 -->
                      <li>
                        <i class="el-icon-download" style="padding-right:5px;color:#fff"></i>
                        <el-link :underline="false" href="./../../../public/excel/!常用国家签证申请材料" download="下载">关于进一步加强外事管理工作的通知</el-link>
                        <span class="time">{{ new Date().getTime() | dateformat('YYYY-MM-DD')}}</span>
                      </li>
                    </ul>
                </div>
                <div class="login fr">
                    <el-card class="my-card" >
                      <h3>欢迎登录</h3>
                        <!-- 表单 -->
                        <el-form ref="loginForm" :model="loginForm"  status-icon>
                          <el-form-item prop="account">
                            <i class="el-icon-user"></i>
                            <el-input v-model="loginForm.account" placeholder="请输入账号" name="account"></el-input>
                          </el-form-item>
                          <el-form-item prop="password">
                            <i class="el-icon-key"></i>
                            <el-input v-model="loginForm.password" placeholder="请输入密码" name="password" type="password"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button @click="login()" type="primary" style="width:50%;">登录</el-button>
                          </el-form-item>
                        </el-form>
                      </el-card>
                </div>
            </div>
            <!-- <div class="down">
                <div class="order fl">
                    <el-divider content-position="left">签证要求</el-divider>
                </div>
                <div class="down-right fl">
                  <div class="linklist">
                    <el-divider content-position="left">常用链接</el-divider>
                    <ul class="xian">
                      <li><i class="el-icon-paperclip"></i><el-link href="countrystandard.html" target="_blank">财政部费用预算标准表</el-link></li>
                      <li><i class="el-icon-paperclip"></i><el-link href="template/index/P020191205320766270459.doc" target="_blank">中外互免签证协议一览表</el-link></li>
                      <li><i class="el-icon-paperclip"></i><el-link href="http://fec.mofcom.gov.cn//article/gbdqzn/indexphone.shtml" target="_blank">世界各国投资指南</el-link></li>
                      <li><i class="el-icon-paperclip"></i><el-link href="visaapp/memberlogin.aspx" target="_blank">签证表填写</el-link></li>
                    </ul>
                </div>
                <div class="downloadlist">
                    <el-divider content-position="left">常用下载</el-divider>
                    <ul class="xian">
                      <li><i class="el-icon-download"></i><el-link href="#" target="_blank">财政部费用预算标准表</el-link></li>
                      <li><i class="el-icon-download"></i><el-link href="#" target="_blank">中外互免签证协议一览表</el-link></li>
                      <li><i class="el-icon-download"></i><el-link href="#" target="_blank">世界各国投资指南</el-link></li>
                      <li><i class="el-icon-download"></i><el-link href="#" target="_blank">签证表填写</el-link></li>
                    </ul>
                </div>
                </div>
            </div> -->
        </div>
        </div>
        <footer>
            <p>系统由<span>北京路引天下科技发展有限责任公司</span>提供技术支持</p>
        </footer>
    </div>
</template>

<script>
// import auth from '@/utils/auth'
export default {
  name: 'app-login',
  data () {
    return {
      // 表单对应的数据对象
      loginForm: {
        account: 'admin',
        password: '!12345'
      },
      // 表单对应的校验规则
      loginRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      src: {
        // lis: '/img/1.22746fe5.jpg',
        // banner: '/img/banner.ce7dced3.jpg',
        // logo: '/img/222.71cfd8cb.png',
        // page1: '/img/page-1.7114ceba.jpg',
        // page2: '/img/page-2.e6f1fa39.jpg'
      },
      lis: [
      ]
    }
  },
  methods: {
    login () {
      // 对整体表单进行校验
      this.$refs.loginForm.validate(async (valid) => {
        // valid 值 true 校验成功
        if (valid) {
          // TODO 进行登录
          // 调用登录接口
          // 请求方式 post
          // 请求地址
          // 请求参数 请求体 {account,password}
          // 响应内容 用户相关信息
          this.$http.get(
            './../../../public/static/db.json',
            this.loginForm
          ).then(res => {
          // 响应报文对象（响应状态行，响应头，响应主体 res.data）
          // res.data = {message:'',data:'用户信息'} 比对
          // 本地存储用户信息 使用auth.js模块中的setUser函数
            // auth.setUser(res.data.data) // 这才是用户信息{token,id,name,photo}
            // 粗暴跳转到首页即可
            window.sessionStorage.setItem('easygoing-user', JSON.stringify(res.data.data))
            this.$router.push('/')
          }).catch(() => {
          // 提示  手机号或验证码错误
            this.$message.error('账号或密码错误')
          })

          // 使用 try{}catch(){} 捕获异常 进行处理
          // try {
          //   // 理想情况
          //   // 1. 发请求获取数据
          //   const res = await this.$http.post('authorizations', this.loginForm)
          //   // 2. 本地存储用户信息
          //   auth.setUser(res.data.data)
          //   // 3. 跳转到 首页
          //   this.$router.push('/')
          // } catch (e) {
          //   // 异常情况
          //   // 1. 错误提示即可
          //   this.$message.error('账号或密码错误')
          // }
        }
      })
    },
    open () {
      this.$alert(
        `<div style=" height:700px;">
            <div class="newscontent" style="clear: both; border: 1px solid #ccc; padding: 0 20px;">
              <div style="margin-top: 20px;">
                <div class="newstitle" style="text-align: center;">
                  <span>中国驻赞比亚大使馆为我们的工业园送去关怀和慰问</span>
                </div>
                <div class="publishdate" style="text-align: center;">
                  <span id="ContentPlaceHolder1_lbPublishedTime">2020年04月07日 11:48:52</span>
                </div>
                <div id="ContentPlaceHolder1_dvContent" class="newscontent_boder">
                  <p>&nbsp;</p>
                  <p>&nbsp; &nbsp; &nbsp;
                    &nbsp;赞比亚时间3月31日下午，中国驻赞比亚大使馆参赞欧阳道冰一行到中国建材赞比亚工业园调研指导新冠疫情防控工作，并向全体员工转达了党和国家领导对海外中资企业的关怀，以及驻赞使馆党委的慰问。中材水泥副总经理、赞比亚公司董事总经理张元慈参加调研并作工作汇报。</p>
                  <p>&nbsp;</p>
                  <p></p>
                  <p>&nbsp;</p>
                  <p>&nbsp; &nbsp; &nbsp;
                    &nbsp;欧阳道冰一行先后到园区销售楼、包装车间、中控楼、返赞人隔离区、园区食堂进行实地走访调研，并听取了关于防疫期间员工管理、人员防护、生活防疫生产物资储备、进出厂管理、厂区生产生活场所管理、商混物流等外出车辆人员管理、应对极端情况的应急预案等方面工作的汇报。</p>
                  <p>&nbsp;</p>
                  <p><img :src="src.page2" style="width:80%;margin-left:10%"></p>
                  <p>&nbsp;</p>
                  <p>&nbsp; &nbsp; &nbsp;
                    &nbsp;欧阳道冰对中国建材赞比亚工业园疫情防控工作给予了充分肯定，并表示疫情已在全球范围爆发，形势十分严峻，且赞比亚已出现39例确诊病例，企业必须认真履行主体责任，进一步做好防疫工作。他强调，一是要遵守当地法律法规，做好员工分类管理并认真履行法定报告要求；二是要科学防控，掌握正确的防疫知识，提升风险意识；三是要做好员工队伍的稳定工作，稳定中赞员工的情绪；四是严控园区疫情输入，统筹好疫情防控和生产经营，妥善安排生产经营，将疫情影响降至最低；五是出现疑似感染等异常情况需及时报告驻赞医疗队，同时拨打使馆电话报告相关情况。</p>
                  <p>&nbsp;</p>
                  <p>&nbsp; &nbsp; &nbsp;
                    &nbsp;中国建材赞比亚工业园将坚决服从国家、驻赞使馆和集团对于海外疫情防控的部署要求，统筹维护企业境外资产和员工生命安全，积极做好防疫工作，在确保员工健康和安全的前提下，稳定开展企业生产经营。</p>
                </div>
                <div class="viewtimes" style="text-align: center;">
                  &nbsp;&nbsp;&nbsp; 浏览次数：<span id="ContentPlaceHolder1_lbBrowsedTimes">53</span>次 &nbsp; 发布：<span id="ContentPlaceHolder1_lbPublishedBy">gaoyue</span>
                </div>
              </div>
           </div>
        </div>`,
        '中国驻赞比亚大使馆为我们的工业园送去关怀和慰问',
        { dangerouslyUseHTMLString: true })
    },
    async getJson () {
      const res = await this.$http.get('./../../../public/static/tips.json', { params: this.lis })
      this.lis = res.data
    }
  },
  created () {
    this.getJson()
  }
}
</script>

<style scoped lang='less'>
body{
    color: #fff;
    vertical-align: middle;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    .container-login {
        width: 100%;
        height: 100%;
        .w {
            width: 70%;
            margin: 0 auto;
        }
        header {
          img {
               width: 25%;
               margin-top: 80px;
               margin-left:30px ;
            }
        }
        .banner {
            position: absolute;
            top: 35%;
            width: 100%;
            height: 400px;
            background: url(./../../assets/banner.jpg) no-repeat;
            background-size: cover;
        }
        .content {
            .up {
                width: 100%;
                height: 350px;
                .announcement {
                    width: 65%;
                    height: 100%;
                    background-color: rgba(190, 190, 190, 0.5);
                    border-radius: 4px;
                    margin-top: 25px;
                    ul{
                      width: 100%;
                      margin-top: 30px;
                      box-sizing: border-box;
                      font-size: 14px;
                      li:first-child {
                        position: relative;
                        list-style: none;
                        padding: 0;
                        height: 90px;
                        line-height: 20px;
                        margin: 0;
                        margin-bottom: 10px;
                        img{
                          width: 20%;
                          height: 80px;
                          margin-right: 20px;
                        }
                        p{
                          width: 75%;
                          text-indent:30px;
                          overflow : hidden;
                          text-overflow: ellipsis;
                          display: -webkit-box;
                          -webkit-line-clamp: 2;
                          -webkit-box-orient: vertical;
                          margin: 0;
                          padding-top: 10px;
                        }
                        .ditail {
                          position: absolute;
                          left: 92%;
                          top: 75%;
                        }
                      }
                      li {
                        margin-left: 20px;
                        height: 30px;
                        line-height: 30px;
                        .time {
                          float: right;
                          padding-right: 20px;
                        }
                      }
                    }
                }
                .login {
                  width: 30%;
                  height: 100%;
                    .el-card {
                      background-color: rgba(190, 190, 190, 0.5);
                      border: none;
                      .el-button--primary {
                        width: 50%;
                        background-color:  rgba(20, 102, 57, 0.5);
                        color: #ffffff;
                        border-color:transparent;
                        position: absolute;
                        left: 25%;
                      }
                    }
                    .my-card {
                      width: 90%;
                      margin: 0 auto;
                      margin-top: 30px;
                      position: relative;
                      height: 250px;
                      i {
                        position: absolute;
                        top: 14px;
                        left: 7px;
                        z-index: 1000;
                      }
                      h3 {
                        font-size: 24px;
                        color: rgb(20, 102, 57);
                        text-align: center;
                        margin: 10px;
                        margin-top: 0;
                      }
                    }
                }
            }
            // .down {
            //     width: 100%;
            //     height: 600px;
            //     .order {
            //         width: 70%;
            //         height: 100%;
            //        // background-color: SeaGreen;
            //     }
            //     .down-right {
            //         width: 30%;
            //         height: 100%;
            //         //background-color: SkyBlue;
            //         .linklist,
            //         .downloadlist {
            //           margin-bottom: 60px;
            //           ul{
            //             margin-top: 30px;
            //             li {
            //               list-style: none;
            //                 height: 30px;
            //                 line-height: 30px;
            //                 overflow: hidden;
            //                 text-overflow:ellipsis;
            //                 white-space: nowrap;
            //                 border-bottom: 1px dashed #dcdfe6;
            //                 i {
            //                   padding-right: 5px;
            //                 }
            //               }
            //             }
            //         }
            //     }
            // }
        }
        footer {
            width: 100%;
            height: 50px;
            color: #333;
            font-size: 14px;
            position: fixed;
            bottom: 0;
            p {
                padding-top: 5px;
                text-align: center;
            }
        }
    }
    .fl {
        float: left;
    }
    .fr {
      float: right;
    }
    .el-divider__text {
      color: rgb(20, 102, 57);
      font-size: 24px;
      font-weight: 700;
      background-color: rgba(190, 190, 190, 0);
      top: -5px;
    }
    .el-divider__text.is-left{
      left: 0;
      transform: translate(0,-100%);
    }
    .el-link.el-link--default {
      color: #fff;
    }
}

//ipad端网页布局
@media only screen and  (max-width:1024px) {
  body {
    width: 100%;
    header {
      img {
        width:50% !important;
        margin-top: 105px !;
      }
    }
    .content {
      width: 100%;
      .up {
        width: 100%;
        position: relative;
        .announcement {
          display: none;
        }
        .login {
          width: 80% !important;
          position: absolute;
          left: 45px;
          top: 20px;
          .my-card {
            width: 100%;
          }
        }
      }
    }
  }
}

//移动端网页布局
@media only screen and  (max-width:414px) {
    body {
    width: 100%;
    header {
      img {
        width:90% !important;
        margin-top: 50px !important;
        margin-left: 15px !important;
      }
    }
    .w {
      width: 90% !important;
    }
    .banner {
      top: 23% !important;
    }
    .content {
      width: 100%;
      .up {
        width: 100%;
        position: relative;
        .announcement {
          display: none;
        }
        .login {
          width: 98% !important;
          position: absolute;
          left: 5px;
          top: 20px;
          .my-card {
            width: 100%;
          }
        }
      }
    }
    footer {
      p {
        font-size: 12px;
      }
    }
  }
}
</style>
