<template>
  <div class="Visitor">
    <h4>最近访客</h4>
    <ul>
      <li
        v-for="item in visitorData"
        :style="{
          backgroundImage: `url(${baseURL}${item.visitor.photo})`
        }"
        :key="item._id">
        <p>{{item.visitor.user}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Visitor",
  data() {
    return {
      visitorData: []
    }
  },
  async created() {
    let {data} = await this.$axios({
      method: "GET",
      url: "/get/visitor"
    })
    if (data.code)return

    this.visitorData = data.data.slice(0,12)
  }
}
</script>

<style scoped lang="less">

.Visitor {
  box-sizing: border-box;
  overflow: hidden;
  background:url("../../assets/img/personal/20200317124614122.gif");
  background-size: cover;
  width: 100%;
  margin-top: 15px;
  box-shadow: 0 0 4px #ddd;
  padding: 20px;
  border-radius: 10px;

  h4 {
    line-height: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e8e9e7;
    color: #ffff00;
    font-size: 16px;
  }

  ul {
    width: 230px;
    display: flex;
    margin-top: 20px;
    flex-wrap: wrap;

    li {
      position: relative;
      float: left;
      width: 53px;
      height: 53px;
      margin-right: 6px;
      margin-bottom: 6px;
      background: none no-repeat 50%/cover;

      &:nth-child(4n) {
        margin-right: 0;
      }

      p {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 16px;
        background-color: rgba(0, 0, 0, .5);
        color: #fff;
        text-align: center;
        line-height: 16px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>














