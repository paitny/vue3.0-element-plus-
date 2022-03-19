<template>
  <AppNav>

  </AppNav>
  <div id="main">
    <div class="left">
      <AppSide></AppSide>
    </div>
    <div class="right">

      <router-view/>

    </div>
    <ToTop></ToTop>

  </div>
</template>
<script>

import AppNav from "./components/AppNav";
import AppSide from "@/components/AppSide";
import {mapMutations} from "vuex";
import ToTop from "./components/ToTop/ToTop";
export default {
  components: {
    AppNav, AppSide,ToTop
  },
  methods: {
    ...mapMutations(['loginSuccess']),
  },
  async created() {
    let {data} = await this.$axios({
      method: "POST",
      url: "/login/check"
    })
    //未登录
    if (data.code)return
    //已登录
    this.loginSuccess(data.data)
  }
}
</script>
<style lang="less">
@import "assets/css/reset.css";
@import "assets/css/font.css";
@import "assets/css/font/iconfont.css";

//vue_particles{
//  position: absolute;
//  left: 0;
//  right: 0;
//  top: 0;
//  bottom: 0;
//  background: linear-gradient(to left top, #0099cc, #996699, #336699);
//}
::-webkit-scrollbar { /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0;
}

::-webkit-scrollbar-thumb { /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: rgba(0, 167, 232, .3);
}

::-webkit-scrollbar-track { /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #EDEDED;
}
body {
  background: url("assets/img/bg/blackvistor.jpg") no-repeat ;
  background-size:cover;
}

#main {
  box-sizing: border-box;
  display: flex;
  width: 1226px;
  min-width: 1226px;
  padding: 0 15px;
  margin: 85px auto 0;

  > .left {
    width: 270px;
    margin-right: 15px;
  }

  > .right {
    flex: 1;
    min-height: 721px;
  }
}


</style>
