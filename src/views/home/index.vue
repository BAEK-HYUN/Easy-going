<template>
    <el-container class="container-home">
      <!-- 侧边菜单栏 -->
      <el-aside class="my-aside" :width="isOpen?'200px':'64px'" >
        <div :class="{minLogo: !isOpen}" class="logo">
        <span >中国石化外事辅助软件</span>
        </div>
        <el-row class="tac">
            <el-menu
              :default-active="$route.path"
              background-color="#20222A"
              text-color="rgba(255,255,255,.7)"
              active-text-color="#009688"
              style="border-right:none"
              :collapse="!isOpen"
              :collapse-transition="false"
              router
              unique-opened
            >
            <el-menu-item index="/login">
                <i class="el-icon-s-home"></i>
                <span slot="title">首页</span>
            </el-menu-item>
              <el-submenu index="/tranorder">
                <template slot="title">
                  <i class="el-icon-s-claim"></i>
                  <span>预约</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Abroadwechat">出国事务预约(微信)</el-menu-item>
                  <el-menu-item index="/Abroadorderquery">出国事务预约(查询)</el-menu-item>
                  <el-menu-item index="/Linkappointment">领汇预约(查询)</el-menu-item>
                  <el-menu-item index="/Allwork">办理业务统计</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/queuing">
                <template slot="title">
                  <i class="el-icon-wind-power"></i>
                  <span>排队</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Queuwechat">排队取号(微信)</el-menu-item>
                  <el-menu-item index="/Call">叫号</el-menu-item>
                  <el-menu-item index="/Businessenquiry">办理业务查询</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="/config">
                <template slot="title">
                  <i class="el-icon-set-up"></i>
                  <span>配置</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Businessconfig">业务配置窗口</el-menu-item>
                  <el-menu-item index="/Userconfig">用户管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/TrackIndex">
                <i class="el-icon-document"></i>
                <span slot="title">信息平台</span>
              </el-menu-item>
              <el-menu-item index="/TrackDistributing">
                <i class="el-icon-s-data"></i>
                <span slot="title">人员分布</span>
              </el-menu-item>
              <el-menu-item index="/TrackTrajectory">
                <i class="el-icon-discover"></i>
                <span slot="title">行踪轨迹</span>
              </el-menu-item>
              <el-submenu index="/abroadteam">
                <template slot="title">
                  <i class="el-icon-map-location"></i>
                  <span>海外队伍</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Createteam">创建队伍</el-menu-item>
                  <el-menu-item index="/Teamlist">队伍列表</el-menu-item>
                  <el-menu-item index="/Createteamconfig">创建队伍默认设置</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="companywechat">
                <template slot="title">
                  <i class="el-icon-chat-round"></i>
                  <span>企业微信</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Wechatlist">通讯录</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="notic">
                <template slot="title">
                  <i class="el-icon-chat-line-square"></i>
                  <span>通知管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/Release">信息发布</el-menu-item>
                  <el-menu-item index="/Norelease">待发列表</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/SystemConfig">
                <i class="el-icon-setting"></i>
                <span slot="title">系统设置</span>
              </el-menu-item>
              <el-menu-item index="/Alidata">
                <i class="el-icon-s-platform"></i>
                <span slot="title">大屏展示</span>
              </el-menu-item>
            </el-menu>
        </el-row>
      </el-aside>
      <el-container>
        <!-- 头部菜单栏 -->
        <el-header class="my-header">
          <span @click="toggleMenu()" class="icon el-icon-s-fold"></span>
          <!-- 管理员 -->
          <el-dropdown class="my-dropdown" @command="handleClick">
          <span class="el-dropdown-link">
            <!-- 用户名称 -->
            <strong class="name">{{name}}</strong>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="setting">基本资料</el-dropdown-item>
            <el-dropdown-item command="changepassword">修改密码</el-dropdown-item>
            <el-dropdown-item command="logout"  >退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        </el-header>
        <el-main>
        <!-- 二级路由显示位置 -->
        <router-view></router-view>
      </el-main>
       <el-footer><span>© 2019 </span>北京路引天下科技发展有限责任公司</el-footer>
      </el-container>
    </el-container>
</template>

<script>
import auth from '@/utils/auth'
export default {
  name: 'app-home',
  data () {
    return {
      isOpen: true,
      name: '',
      photo: ''
    }
  },
  created () {
    // 获取用户信息 给name photo 赋值
    const user = auth.getUser()
    this.name = user.name
    this.photo = user.photo
  },
  methods: {
    toggleMenu () {
      // 切换状态  展开 收起
      this.isOpen = !this.isOpen
    },
    // 处理下拉菜单的点击
    handleClick (command) {
      if (command === 'setting') {
        this.$router.push('/setting')
      }
      if (command === 'logout') {
        // 退出登录
        // 1. 清除本地用户信息
        auth.delUser()
        // 2. 跳转到登录页面
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less">
.container-home {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .my-aside {
    background: #20222A;
    box-sizing: border-box;
    overflow-y:hidden;
    .logo {
      width: 100%;
      height: 60px;
      span {
          color: rgba(255,255,255,.7);
          font-size: 17px;
          line-height: 60px;
          padding-left: 13px;
          overflow: hidden;
      }
    }
    // 样式一定需要写在 logo 下方，加上这个类之后去覆盖上面样式
    .minLogo{
      span {
          display: none;
      }
    }
    .el-submenu__title:hover,
    li:hover {
      color: #fff !important;
    }
  }
  .my-header {
    border-bottom: 1px solid #ddd;
    line-height: 60px;
    .icon {
      font-size: 24px;
      vertical-align: middle;
    }
    .text {
      vertical-align: middle;
      padding-left: 10px;
    }
    .my-dropdown {
      float: right;
      .head {
        width: 30px;
        height: 30px;
        vertical-align: middle;
      }
      .name {
        padding-left: 5px;
        vertical-align: middle;
      }
    }
  }
}
</style>
