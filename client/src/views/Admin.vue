<template>
  <div id="Admin">
    <article>
      <el-tabs v-model="activeName">
        <el-tab-pane label="发表文章" name="first">
          <ArticleAdd></ArticleAdd>
        </el-tab-pane>
        <el-tab-pane label="文章管理" name="second">
          <ArticleManger></ArticleManger>
        </el-tab-pane>
        <el-tab-pane label="添加友链" name="third">
          <LinkAdd></LinkAdd>
        </el-tab-pane>
        <el-tab-pane label="友链管理" name="fourth">
          <LinkManger></LinkManger>
        </el-tab-pane>
        <el-tab-pane label="反馈收集" name="fifth">
          <ContactMsg></ContactMsg>
        </el-tab-pane>
        <el-tab-pane label="轮播图上传" name="sixth">
          <SwiperAdd></SwiperAdd>
        </el-tab-pane>
      </el-tabs>
    </article>
  </div>
</template>

<script>
import LinkAdd from "../components/Admin/LinkAdd";
import LinkManger from "../components/Admin/LinkManger";
import ArticleAdd from "../components/Admin/ArticleAdd";
import ArticleManger from "../components/Admin/ArticleManger";
import ContactMsg from "../components/Admin/ContactMsg";
import SwiperAdd from "../components/Admin/SwiperAdd";
import {mapState} from "vuex"

export default {
  name: "Admin",
  data() {
    return {
      activeName: "first"
    }
  },
  components: {
    LinkAdd, LinkManger, ArticleAdd, ArticleManger, ContactMsg,SwiperAdd
  },
  computed: {
    ...mapState(['userInfo'])
  },
  watch: {
    userInfo() {
      this.check()
    }
  },
  methods: {
    //验证权限
    async check() {
      //向后端发请求，验证管理员权限
      let {data} = await this.$axios({
        method: "POST",
        url: "/adminServer/check"
      })

      if (data.code) {
        this.$router.replace("/")
        this.$message.error("请以管理员账号登录admin页面")
      }
    }
  },
  async created() {
    this.check()
  }
}
</script>

<style lang="less" scoped>
#Admin {
  article {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand, Microsoft YaHei, sans-serif;
    min-height: 721px;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }

    .el-tabs {
    }
  }
}
</style>














