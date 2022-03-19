<template>

    <el-carousel :height="bannerHeight+'px'" type="card">
      <el-carousel-item v-for="item in urlList" :key="item.id">
        <img :src="item.url" alt="正在加载中">
      </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
  name: 'swiper',
  data(){
    return {
      urlList: [
        {id:0,url:require('../../assets/img/personal/01.jpg')},
        {id:1,url:require('../../assets/img/personal/02.jpg')},
        {id:2,url:require('../../assets/img/personal/03.jpg')},
        {id:3,url:require('../../assets/img/personal/04.jpg')},
        {id:4,url:require('../../assets/img/personal/05.jpg')},
      ],
      //el-carousel容器高度
      bannerHeight:0,
      screenWidth:0
    };
  },
  methods: {
  },
  mounted () {
    // 首次加载时,初始化高度
    this.screenWidth = window.innerWidth
    this.bannerHeight = 350 / 1550 * this.screenWidth
    // 窗口大小发生改变
    window.onresize = () => {
      this.screenWidth = window.innerWidth
      this.bannerHeight = 350 / 1550 * this.screenWidth
    }
  }


}
</script>
<style lang="less" scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin:0;


}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
  border-radius: 10px;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
  border-radius: 10px;
}
img{
  width: 100%;
  height: inherit;
  border-radius: 10px;
}
</style>
