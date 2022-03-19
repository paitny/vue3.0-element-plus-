<template>
  <el-form-item label="轮播图上传">
    <el-upload
        class="upload-demo"
        drag
        :action="`${baseURL}/adminServer/swiper/add`"
        :auto-upload="false"
        :on-change="fileChange"
        :on-success="md_upload_success"
        :before-remove="beforeRemove"
        :limit="6"
        ref="mdForm"
        :with-credentials="true"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将.md文件拖到此处，或<em>点击上传</em></div>
    </el-upload>
  </el-form-item>
</template>

<script>
export default {
  name: "SwiperAdd"
}
</script>

<style scoped>

</style>