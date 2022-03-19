<template>
  <div class="UserBox">
    <el-popover
      placement="bottom-end"
      trigger="hover"
      :width="170"
    >
      <template #reference>
        <div
          class="img"
          :style="{
            backgroundImage: `url(${baseURL}${userInfo.photo}${random})`
          }"
          :title="userInfo.user"
        ></div>
      </template>
      <div class="show">
        <el-button type="primary" size="mini" @click="info">修改信息</el-button>
        <el-button type="danger" size="mini" @click="logout">退出登录</el-button>
      </div>
    </el-popover>

  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex"

export default {
  name: "UserBox",
  data() {
    return {
      random: `?_=${Date.now()}`,
      backgroundImage: "baseURL"
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  watch: {
    userInfo() {
      this.random = `?_=${Date.now()}`
    }
  },
  methods: {
    ...mapMutations(['loginOut']),
    //退出登录
    async logout() {
      let {data} = await this.$axios({
        method: "POST",
        url: "/login/out"
      })

      if (data.code) return

      //退出登录成功,清空vuex
      this.$message.success("已退出登录")
      this.loginOut()
    },
    //修改个人信息
    info() {
      this.$router.push("/user")
    }
  }
}
</script>

<style scoped lang="less">
.UserBox {
  width: 55px;
  height: 55px;
  padding: 8px 0;

  .img {
    width: 55px;
    height: 55px;
    background: none center center/cover;
    border-radius: 50%;
    cursor: pointer;
  }
}
</style>














