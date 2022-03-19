<template>
  <div id="goTop">
    <div class="icons" v-show="visiable" @click="handleScrollTop">
      <i class="icons-top">

      </i>
    </div>
  </div>
</template>



<script>
export default {
  name: "goTop",
  data() {
    return {
      scrollTop: null, //初始化scrollTop
      visiable: false, //默认不显示
    }
  },
  methods: {
    handleScroll() {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if (this.scrollTop > 200) {
        this.visiable = true
      } else {
        this.visiable = false
      }
    },

    handleScrollTop() {
      let timer = null,
          that = this
      cancelAnimationFrame(timer)
      timer = requestAnimationFrame(function fn() {
        if (that.scrollTop > 0) {
          that.scrollTop -= 500
          document.body.scrollTop = document.documentElement.scrollTop = that.scrollTop;
          timer = requestAnimationFrame(fn)
        } else {
          cancelAnimationFrame(timer);
          that.visiable = false;
        }
      })
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>

.icons {
  position: fixed;
  right: 15px;
  bottom: 100px;
  border-radius: 50%;
  z-index: 999999;
  background-color:transparent ;

}

.icons:hover {
  background-color:transparent ;

}

.icons-top {
  cursor: pointer;
  display: block;
  width: 45px;
  height: 85px;
  background-size: 100px 100px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url("../../assets/img/bg/redtotop.gif");
}
</style>
