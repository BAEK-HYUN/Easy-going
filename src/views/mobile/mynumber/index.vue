<template>
  <div class="mobile-number">
    <div class="logo">
      <img src="./../../../assets/s-logo.png" />
      <span>出 国 ( 境 ) 事 务 预 约</span>
      <el-button round class="comeback" size="mini" @click="comeback">返回首页</el-button>
    </div>
    <div class="content">
        <ul>
            <li>您还没有预约信息哦~</li>
        </ul>
    </div>
    <div class="goon">
       <el-button round  @click="goon" size="mini">继续取号</el-button>
    </div>
    <div class="foot">
      <p>©<span>2019</span> 北京路引天下科技发展有限责任公司
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobile-number',
  methods: {
    comeback () {
      this.$router.push('/Mobile')
    },
    goon () {
      this.$router.push('/takeon')
    }
  }
}
</script>

<style lang="less">
body {
  width: 100%;
  .mobile-number {
    width: 100%;
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
      .comeback {
        position: absolute;
        top: 2%;
        left: 70%;
      }
    }
    .foot {
      text-align: center;
      p {
        color: #989898;
      }
    }
    .goon {
      width: 100%;
      text-align: center;
      margin-top: 40px;
      button {
        font-size: 16px;
      }
    }
    .content {
        width: 96%;
        margin: 0 auto;
        ul {
            li {
                list-style: none;
            }
        }
    }
  }
}
</style>
