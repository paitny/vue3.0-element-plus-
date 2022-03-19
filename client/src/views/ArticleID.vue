<template>
  <div id="ArticleID">
    <article>
      <main id="mdToHTML"></main>
    </article>
  </div>
</template>

<script>
export default {
  name: "ArticleID",

  async mounted() {

    let id = this.$route.params.id
    let {data} = await this.$axios({
      method: "GET",
      url: "/get/articleID",
      params: {id}
    })

    if (data.code) {
      return this.$message({
        type: "error",
        message: data.msg,
        duration: 1000,
        onClose: () => {
          this.$router.replace('/article')
        }
      })
    }

    let {data: md} = await this.$axios({
      method: "GET",
      url: `${data.data.md}`
    })

    editormd.markdownToHTML("mdToHTML", {
      markdown: md,
      emoji: true
    });
  }
}
</script>

<style lang="less" scoped>
#ArticleID {
  #mdToHTML {
    box-sizing: border-box;
  }
}
</style>














