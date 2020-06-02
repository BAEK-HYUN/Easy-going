<template>
  <div class="home-moblie">
      <div class="logo">
          <img src="./../../assets/s-logo.png">
          <span>出 国 ( 境 ) 事 务 预 约</span>
      </div>
      <ul>
          <li><el-button type="primary" @click="myorder">访客预约</el-button></li>
          <li><el-button type="primary" @click="takeon">排队取号</el-button></li>
          <li><el-button type="primary" @click="myplans">我的预约</el-button></li>
          <li><el-button type="primary" @click="mynumber">我的取号</el-button></li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'home-moblie',
  methods: {
    myorder () {
      this.$router.push('/myorder')
    },
    takeon () {
      this.$router.push('/takeon')
    },
    myplans () {
      this.$router.push('/myplans')
    },
    mynumber () {
      this.$router.push('/mynumber')
    }
  }
}
</script>

<style lang="less">
body {
    .home-moblie {
        width: 100%;
        ul {
            li {
                width: 80%;
                list-style: none;
                margin: 20px auto;
                button {
                    width: 100%;
                }
            }
        }
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
    }
}
</style>
