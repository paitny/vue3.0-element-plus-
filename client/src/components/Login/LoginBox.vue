<template>
  <div class="loginBox">
    <el-button type="success" size="large" @click="openLoginBox">登录 / 注册</el-button>
    <div class="box" @click="closeLoginBox" v-if="ifShow">
      <div class="main" @click.stop>
        <el-tabs
          v-model="activeName"
        >
          <el-tab-pane label="立即登陆" name="first">
            <el-form
              :model="loginForm"
              status-icon
              :rules="rules"
              ref="loginForm"
              label-width="80px"
              @keydown.enter="loginSubmit"
            >
              <el-form-item label="用户名" prop="user" label-width="80px">
                <el-input v-model="loginForm.user"/>
              </el-form-item>
              <el-form-item label="密码" prop="pass" label-width="80px">
                <el-input type="password" v-model="loginForm.pass"/>
              </el-form-item>
              <el-form-item label-width="80px">
                <el-button type="primary" @click="loginSubmit">登录</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="注册账号" name="second">
            <el-form
              :model="regForm"
              status-icon
              :rules="rules"
              ref="regForm"
              label-width="80px"
              @keydown.enter="regSubmit"
            >
              <el-form-item label="用户名" prop="user" label-width="80px">
                <el-input v-model="regForm.user"/>
              </el-form-item>
              <el-form-item label="密码" prop="pass" label-width="80px">
                <el-input type="password" v-model="regForm.pass"/>
              </el-form-item>
              <el-form-item label="确认密码" prop="pass2" label-width="80px">
                <el-input type="password" v-model="regForm.pass2"/>
              </el-form-item>
              <el-form-item label-width="80px">
                <el-button type="primary" @click="regSubmit">立即注册</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>

</template>

<script>

import {mapMutations} from "vuex"
import Particles from "../Particles/Particles"
export default {
  name: "LoginBox",Particles,
  data() {
    return {
      ifShow: false,
      activeName: "first",

      //登录表单数据
      loginForm: {
        user: "",
        pass: ""
      },
      //注册表单数据
      regForm: {
        user: "",
        pass: "",
        pass2: ""
      },
      //表单字段规则
      rules: {
        user: [
          {required: true, message: "请输入用户名"},
          {
            validator(rule, value, cb) {
              //长度验证
              if (value.length < 2 || value.length > 8) {
                cb(new Error("请输入2~8位的用户名"))
              }
              //规则验证
              if (!/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]+$/.test(value)) {
                cb(new Error("只允许 数字 字母 _ 中/日/韩文"))
              }

              cb()
            }
          }
        ],
        pass: [
          {required: true, message: "请输入密码"},
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
            }
          }
        ],
        pass2: [
          {required: true, message: "请确认密码"},
          {
            validator: (rule, value, cb) => {
              if (this.regForm.pass !== value) {
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
    //打开登录/注册弹窗
    openLoginBox() {
      this.ifShow = true
    },
    //关闭登录/注册弹窗
    closeLoginBox(){
      this.ifShow = false
    },

    //注册提交
    regSubmit() {
      this.$refs.regForm.validate(async v => {
        if (v) {
          //发送请求
          let {data} = await this.$axios({
            method: "POST",
            url: "/reg",
            data: {
              user: this.regForm.user,
              pass: this.regForm.pass
            }
          })

          //注册失败
          if (data.code) {
            this.$message.error(data.msg)
            return
          }

          //注册成功
          this.$message.success("注册成功，即将切换到登录")
          //清空表单数据
          this.$refs.regForm.resetFields()
          //切换到登录
          this.activeName = "first"

        } else {
          return false
        }
      })
    },

    //登录提交
    loginSubmit() {
      this.$refs.loginForm.validate(async v=>{
        if (v){
          let {data} = await this.$axios({
            method: "POST",
            url: "/login",
            data: this.loginForm
          })

          //登录失败
          if (data.code){
            return this.$message.error(data.msg)
          }

          //登录成功
          this.$message.success("登录成功") //弹窗
          this.$refs.loginForm.resetFields() //清空登录框数据
          this.ifShow = false //关闭弹窗
          this.loginSuccess(data.data) //存到vuex

        }else {
          return false
        }
      })
    },

    //vuex
    ...mapMutations(['loginSuccess'])
  }
}
</script>

<style scoped lang="less">
.loginBox{
  padding: 11px 0;
  .box {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background: url("../../assets/img/personal/vor.gif") no-repeat;
    background-size:cover ;

    .main {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300px;
      padding: 10px 20px;
      background-color: #fff;
    }
  }
}


</style>














