<template>

  <div id="User">
    <article>
      <h2>修改用户名</h2>
      <UpdateName></UpdateName>
    </article>
    <article>
      <h2>修改密码</h2>
      <UpdatePass></UpdatePass>
    </article>
    <article>
      <h2>头像上传</h2>
      <UpdatePhoto></UpdatePhoto>
    </article>
  </div>
</template>

<script>
import UpdateName from "@/components/User/UpdateName";
import UpdatePass from "@/components/User/UpdatePass";
import UpdatePhoto from "@/components/User/UpdatePhoto";
import {mapState} from 'vuex'

export default {
  name: "User",
  components: {
    UpdateName, UpdatePass, UpdatePhoto
  },
  computed: {
    ...mapState(['userInfo'])
  },
  watch: {
    userInfo() {
      this.backHome()
    }
  },
  methods: {
    //未登录情况下，返回首页
    backHome() {
      if (!this.userInfo.user) {
        this.$message.error("当前未登录，无法修改个人信息，已自动返回首页")
        this.$router.replace("/")
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.backHome()
    })
  }
}
</script>

<style scoped lang="less">
article {
  box-sizing: border-box;
  margin-bottom: 15px;
  box-shadow: 0 0 4px #ddd;
  padding: 25px 20px;
  background-color: #fff;
  font-family: Quicksand, Microsoft YaHei, sans-serif;

  h2 {
    margin-bottom: 15px;
    font-size: 20px;
    letter-spacing: 3px;
    line-height: 24px;
    border-left: 5px solid #73b899;
    text-indent: 10px;
  }
}
</style>














