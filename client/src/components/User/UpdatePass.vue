<template>
  <div id="UpdatePass">
    <el-form
      :model="passForm"
      status-icon
      :rules="rules"
      ref="passForm"
      label-width="100px"
    >

      <el-form-item label="原密码：" prop="pass" label-width="100px">
        <el-input type="password" v-model="passForm.oldPass"></el-input>
      </el-form-item>
      <el-form-item label="新密码：" prop="pass" label-width="100px">
        <el-input type="password" v-model="passForm.pass"></el-input>
      </el-form-item>
      <el-form-item label="确认新密码：" prop="pass2" label-width="100px">
        <el-input type="password" v-model="passForm.pass2"></el-input>
      </el-form-item>
      <el-form-item label-width="100px">
        <el-button type="primary" @click="submit">确认修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "UpdatePass",
  data() {
    return {
      passForm: {
        oldPass: "",
        pass: "",
        pass2: ""
      },
      rules: {
        pass: [
          {
            validator(rule, value, cb) {
              //长度验证
              if (value.length < 6 || value.length > 18) {
                cb(new Error("请输入6~18位的密码"))
              }
              //规则验证
              if (!/^[\w\[\]\/\\~`|<>,.?;':"{}!@#$%^&*()_+=-]+$/.test(value)) {
                cb(new Error("不允许的密码字符"))
              }

              cb()
            },
            trigger: "input"
          }
        ],
        pass2: [
          {
            validator: (rule, value, cb) => {
              if (this.passForm.pass !== value) {
                cb(new Error("两次输入密码不一致"))
              }
              cb()
            }
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['loginOut']),
    submit() {
      this.$refs.passForm.validate(async v=>{
        if (v) {

          let {data} = await this.$axios({
            method: "POST",
            url: "/personal/pass",
            data: {
              oldPass: this.passForm.oldPass,
              pass: this.passForm.pass
            }
          })

          //修改失败
          if (data.code){
            return this.$message.error(data.msg)
          }

          //修改成功
          this.$message.success("密码修改成功，请重新登录") //提示
          this.loginOut() //vuex清理
          this.$refs.passForm.resetFields() //清空表单
          this.$router.push("/") //返回首页

        }else{
          return false
        }
      })
    }
  }
}
</script>

<style scoped>

</style>














