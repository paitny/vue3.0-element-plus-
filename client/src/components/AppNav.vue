<template>
  <div id="AppNav">
    <div class="content">
      <!--logo-->
      <div class="logo">
        <a href="/">wypty.com</a>
      </div>
      <!--导航-->
      <div class="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/article">文章</router-link>
        <router-link to="/message">留言</router-link>
        <router-link to="/link">友链</router-link>
        <router-link to="/about">关于</router-link>
      </div>
      <!--登陆/注册-->
      <div class="login">
        <UserBox v-if="userInfo.user"></UserBox>
        <LoginBox v-else></LoginBox>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBox from "@/components/Login/LoginBox";
import UserBox from "@/components/Login/UserBox";
import {mapState} from "vuex"
export default {
  name: "AppNav",
  components: {
    LoginBox, UserBox
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style lang="less" scoped>

#AppNav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: rgb(124,134,221);
  box-shadow: 0 0 2px #999;
  z-index: 999;

  .content {
    box-sizing: border-box;
    justify-content: space-between;
    display:flex;
    width: 1226px;
    min-width: 1226px;
    padding: 0 15px;
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    width: 130px;
    height: 50px;

    a {
      display: block;
      width: 100%;
      height: 100%;
      line-height: 60px;
      font-size: 26px;
      letter-spacing: 5px;
      font-family: Pacifico;
      color: rgba(0, 0, 0, .7);
    }
  }

  .nav {
    display: flex;
    height: 70px;
    font-family: STHupo;
    font-size: 20px;
    a{
      display: block;
      height: 48px;
      border-bottom: 2px solid transparent;
      padding: 0 25px;
      color: black;
      line-height: 70px;
      font-weight: bolder;
      transition: all .3s;

      &:hover{
        color: #00b7ff;
      }
      &.router-link-active{
        color: #00b7ff;
        border-color: #00b7ff;
      }
    }
  }

  .login{
  }
}

</style>














