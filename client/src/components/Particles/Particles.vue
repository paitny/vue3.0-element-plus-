<template>
    <vue-particles
        class="login-bg"
        color="#39AFFD"
        :particleOpacity="0.7"
        :particlesNumber="100"
        shapeType="circle"
        :particleSize="4"
        linesColor="#8DD1FE"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
        id="particles-js"
    >
    </vue-particles>

</template>

<!--// 根据自己的情况设置样式(一般不需要写，看情况)-->
<style scoped lang="less">
////<!--.login{-->
////<!--  width: 100%;-->
////<!--  height: 100%;-->
////<!--  color: #cccccc;-->
//<!--  /*如果想做背景图片 可以给标签一个class 直接添加背景图*/-->
//<!--//position: relative;-->
//<!--}-->
//<!--/*如果屎全屏展示*/-->
//<!--   //.login-bg{-->
//<!--   //  width: 100%;-->
//<!--   //  height: 100%;-->
//<!--   //  background: #3E3E3E;-->
//<!--   //}-->
#particles-js{
  position: absolute;
  width: 1226px;
  height: 800px;
  top:10px;
  z-index: 0;
}
</style>
