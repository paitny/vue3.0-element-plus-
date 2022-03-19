<template>
  <div class="HotArticle">
    <h4>Hot Articles</h4>
    <ul>
      <li
        v-for="(item,index) in hotArticle"
        :key="item._id"
      >
        <i>{{ index + 1 }}</i>
        <router-link :to="`/article/${item._id}`" target="_blank">{{ item.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotArticle",
  data() {
    return {
      hotArticle: []
    }
  },
  async created() {
    let {data} = await this.$axios({
      method: "get",
      url: "/get/article"
    })
    if (data.code) return

    this.hotArticle = data.data.slice(0, 3)
  }
}
</script>

<style lang="less" scoped>
.HotArticle {
  box-sizing: border-box;
  font-family: Quicksand;
  box-shadow: 0 0 4px #ddd;
  background:url("../../assets/img/personal/vor.gif");
  padding: 20px;
  max-width: 950px;
  border-radius: 10px;

  h4 {
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    color: #ffff00;
    font-size: 16px;
  }

  ul {
    margin-top: 12px;

    li {
      box-sizing: border-box;
      overflow: hidden;
      display: flex;
      height: 40px;
      line-height: 40px;
      padding: 0 3px;

      &:nth-child(1) i {
        background-color: #71a598;
      }

      &:nth-child(2) i {
        background-color: #6eb3a3;
      }

      &:nth-child(3) i {
        background-color: #93bbb2;
      }

      i {
        display: block;
        width: 22px;
        height: 22px;
        margin-top: 9px;
        margin-right: 15px;
        border-radius: 50%;
        line-height: 16px;
        font-size: 16px;
        font-style: normal;
        color: #fff;
        text-align: center;
        font-weight: 100;
        font-family: Pacifico;
      }

      a {
        display: block;
        flex: 1;
        color: #fff;
        font-size: 14px;
        text-decoration: none;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>














