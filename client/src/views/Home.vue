<template>
  <h3 >成都文理学院第十八届师生运动会</h3>
  <Swiper></Swiper>
<!--  <router-view></router-view>-->
  <div id="Home">
    <!--hello-->
    <article class="hello">
      <h2>HELLO!</h2>
      <p class="des">
        你好！欢迎来到我的博客！我是一名WEB前端攻城狮，热衷于研究JavaScript、NodeJs、Vue、React、WebGL、Flutter、Electron……这是我的主页！我会在这里发表一些不成熟的技术文章，记录一些沙雕的日常。博客目前使用的是Vue
        + Nuxt + Element + Node + Express + MongoDB搭建的，如果对源码感兴趣的话可以
        <a href="https://github.com/wypty" target="_blank">点击这里</a>
        。欢迎提出宝贵的建议哦！
      </p>
      <div class="info">
        <div class="personal">
          <h3>personal information</h3>
          <ul>
            <li>
              <p>NICKNAME</p>
              <p>小梵</p>
            </li>
            <li>
              <p>ADDRESS</p>
              <p>四川省成都市</p>
            </li>
            <li>
              <p>EMAIL</p>
              <p>1500586110@qq.com</p>
            </li>
            <li>
              <p>GITHUB</p>
              <p><a href="https://github.com/wypty" target="_blank">https://github.com/wypty</a></p>
            </li>
          </ul>
        </div>
        <div class="skills">
          <h3>skills</h3>
          <ul>
            <li>
              <p class="lang">
                <span>HTML5 & CSS3</span>
                <span>90%</span>
              </p>
              <p class="level">
                <span style="width: 90%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span>Javascript</span>
                <span>85%</span>
              </p>
              <p class="level">
                <span style="width: 85%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span>NodeJs</span>
                <span>80%</span>
              </p>
              <p class="level">
                <span style="width: 80%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span>Vue & React & 小程序</span>
                <span>70%</span>
              </p>
              <p class="level">
                <span style="width: 70%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span>Flutter</span>
                <span>60%</span>
              </p>
              <p class="level">
                <span style="width: 60%"></span>
              </p>
            </li>
            <li>
              <p class="lang">
                <span>Electron</span>
                <span>50%</span>
              </p>
              <p class="level">
                <span style="width: 50%"></span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <!--article-->
    <article class="article">
      <h2>ARTICLE</h2>
      <p class="des">热门文章推荐。 <a href="/article">更多文章</a> 请访问文章页（￣︶￣）↗　</p>
      <div class="content" v-if="hotArticle.length">
        <div class="left">
          <div class="art">
            <img src="../assets/img/article/1.jpg" alt="">
            <p>{{hotArticle[0].title}}</p>
            <div class="cover">
              <a :href="`/article/${hotArticle[0]._id}`" target="_blank">
                <p>Tag: HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
          <div class="art">
            <img src="../assets/img/article/3.jpg" alt="">
            <p>{{hotArticle[1]?hotArticle[1].title:hotArticle[0].title}}</p>
            <div class="cover">
              <a :href="`/article/${hotArticle[1]?hotArticle[1]._id:hotArticle[0]._id}`" target="_blank">
                <p>Tag: HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="art">
            <img src="../assets/img/article/2.jpg" alt="">
            <p>{{hotArticle[2]?hotArticle[2].title:hotArticle[0].title}}</p>
            <div class="cover">
              <a :href="`/article/${hotArticle[2]?hotArticle[2]._id:hotArticle[0]._id}`" target="_blank">
                <p>Tag: HTML</p>
                <p>View More</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!--work-->
    <article class="work">
      <h2>EXPERIENCE</h2>
      <ul>
        <li>
          <div class="left">
            <p class="time">2020-</p>
          </div>
          <div class="right">
            <h3>WEB DEVELOPER/College Students</h3>
            <p class="img">
              <img src="../assets/img/technology/jquery.png">
            </p>
            <p class="company">Chengdu University of Arts and Sciences</p>
            <p class="content"> 目前掌握的技术有HTML5、CSS3、JavaScript、Nodejs、vue、Canvas、Design pattern & Algorithm。 </p>
            <p><img src="../assets/img/article/back.jpg" width="600" height="350" ></p>
          </div>
        </li>
        <li>
          <div class="left">
            <p class="time">2020-</p>
          </div>
          <div class="right">
            <h3>Minister of sports</h3>
            <p class="img">
              <img src="../assets/img/technology/jquery.png">
            </p>
            <p class="company">Student branch of Information Engineering College</p>
            <p class="content">
              <img src="../assets/img/article/xinxi.jpg" width="600" height="350">
            </p>
          </div>
        </li>
        <li>
          <div class="left">
            <p class="time">2020-</p>
          </div>
          <div class="right">
            <h3>Back-end Technology</h3>
            <p class="img">
              <img src="../assets/img/technology/jquery.png">
            </p>
            <p class="company">NodeJs</p>

            <p class="content"> 要学习NodeJs，必须有一定的JavaScript基础，理解事件模型，了解JavaScript的语法和特性，理解JavaScript面向对象编程 学习NodeJs类似于Python等代码组织的方式——包机制，require和exports。 一些基本的操作系统，HTTP等网络通信，数据库（尤其是非关系数据库），Web编程的知识有所了解。</p>
            <p><img src="../assets/img/article/OIP-C.jpeg" width="600" height="350" ></p>
          </div>
        </li>
        <li>
          <div class="left">
            <p class="time">2020-</p>
          </div>
          <div class="right">
            <h3>High-tech</h3>
            <p class="img">
              <img src="../assets/img/technology/jquery.png">
            </p>
            <p class="company">装逼代码 点击图片进行装逼</p>
            <p class="content">
              <a href="https://pranx.com/hacker/" target="_blank"><img src="../assets/img/article/zb.png" width="600" height="350"></a>
            </p>
          </div>
        </li>
      </ul>
    </article>

    <!--contact-->
    <article class="contact" id="contact">
      <h2>CONTACT ME</h2>
      <p class="des">有任何问题请联系我吧，收到消息后会给您回复邮件的哦♪(^∇^*)</p>
      <el-form
        :model="contactForm"
        status-icon
        :rules="rules"
        ref="contactForm"
        label-position="top"
      >
        <el-form-item label="Your Name" prop="name">
          <el-input v-model="contactForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Your Email" prop="email">
          <el-input v-model="contactForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Subject" prop="subject">
          <el-input v-model="contactForm.subject"></el-input>
        </el-form-item>
        <el-form-item label="Your Message" prop="message">
          <el-input v-model="contactForm.message" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submit">Send</el-button>
        </el-form-item>
      </el-form>
    </article>
  </div>
<!--  Scroll down to see the bottom-right button.-->
<!--  <el-backtop target=".page-component__scroll .el-scrollbar__wrap"></el-backtop>-->
</template>
<script>
import Swiper from "../components/Swiper/Swiper";
export default {
  components:{
    Swiper
  },
  name:'index',
  data() {
    return {
      //表单数据
      contactForm: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      //表单规则
      rules: {
        name: [
          {required: true, trigger: "blur"}
        ],
        email: [
          {type: "email", required: true, trigger: "blur"}
        ],
        message: [
          {required: true, trigger: "blur"}
        ],
        subject: [{type: "string"}]
      },

      //文章列表
      hotArticle: []
    }
  },

  methods: {
    //Contact me的提交
    submit() {
      //需要验证表单的数据合不合要求
      //需要调用el-form组件的validate
      this.$refs.contactForm.validate(async valid => {
        if (valid) {

          let {data} = await this.$axios({
            method: "POST",
            url: "/contact",
            data: this.contactForm
          })

          if (data.code){
            return this.$message.error(data.msg)
          }

          this.$message.success("发送成功，我会尽快回复的")
          this.$refs.contactForm.resetFields()

        } else {
          return false
        }
      })
    },

    //请求文章数据
    async getArticle() {
      let {data} = await this.$axios({
        method: "get",
        url: "/get/article"
      })
      if (data.code) return
      this.hotArticle = data.data.slice(0, 3)
    }
  },
  created() {
    this.getArticle()
  }
}
</script>

<style lang="less" scoped>

h3{
  color: #ffff00;
  text-align: center;
  font-family:华文琥珀;
  margin:20px 0 20px 0;
}
#Home {
  article {
    background-color: rgb(104,217,255);
    padding: 15px;
    margin-bottom: 15px;
    font-family: Quicksand;
    box-shadow: 0 0 4px #ddd;
    margin-top: 40px;

    h2 {
      margin-bottom: 15px;
      font-size: 30px;
      letter-spacing: 3px;
      padding-top: 10px;
    }

    p.des {
      padding-bottom: 20px;
      border-bottom: 1px solid #ddd;
      margin-bottom: 20px;
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;

      a {
        text-decoration: underline;
        color: #aaa;
      }
    }
  }

  article.hello {
    .info {
      display: flex;
      width: 100%;

      & > div {
        display: flex;
        flex-direction: column;
        width: 50%;
      }

      h3 {
        margin-bottom: 30px;
        font-weight: 400;
        font-size: 22px;
        color: #666;
      }

      .personal {
        overflow: hidden;
        display: flex;

        ul {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          li {
            display: flex;

            p:nth-child(1) {
              width: 40%;
              font-weight: 700;
            }

            p:nth-child(2) {
              width: 60%;
            }

            a {
              text-decoration: none;
            }
          }
        }
      }

      .skills {
        ul li {
          margin-bottom: 20px;

          p.lang {
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            letter-spacing: 2px;

            span:nth-child(1) {
              font-size: 14px;
            }

            span:nth-child(2) {
              font-size: 12px;
              color: #999;
            }
          }

          p.level {
            width: 100%;
            height: 5px;
            background-color: #ececec;

            span {
              display: block;
              height: 100%;
              background-color: #bfe2e6;
            }
          }
        }
      }
    }
  }

  article.article {
    div.content {
      display: flex;

      > div {
        box-sizing: border-box;
        width: 50%;
        padding-right: 1px;

        .art {
          overflow: hidden;
          position: relative;
          box-sizing: border-box;
          padding-bottom: 1px;

          img {
            display: block;
            width: 100%;
          }

          > p {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 30px;
            background-color: rgba(0, 0, 0, .1);
            font-weight: 700;
            line-height: 30px;
            color: #fff;
            text-align: center;
            transition: bottom .3s;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }

          div.cover {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: 100%;
            height: 100%;

            a {
              display: block;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, .5);
              opacity: 0;
              transition: opacity .3s;

              p {
                position: absolute;
                transition: .3s;
                font-weight: 700;
              }

              p:nth-child(1) {
                top: 20%;
                width: 100%;
                text-align: center;
                color: #fff;
                font-size: 22px;
                text-transform: uppercase;
              }

              p:nth-child(2) {
                left: 50%;
                bottom: 20%;
                width: 30%;
                height: 32px;
                border-radius: 16px;
                text-align: center;
                line-height: 32px;
                transform: translateX(-50%);
                color: #000;
                background-color: #bfe2e6;
              }
            }
          }

          &:hover div.cover a {
            opacity: 1;

            p:nth-child(1) {
              top: 32%;
            }

            p:nth-child(2) {
              bottom: 32%;
            }
          }
        }
      }
    }
  }

  article.work {
    ul {
      margin-top: 40px;

      li {
        display: flex;

        div.left {
          width: 200px;

          p.time {
            position: relative;
            top: -12px;
            width: 160px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-weight: 700;
            background-color: #bfe2e6;

            &::after {
              position: absolute;
              top: 0;
              right: -30px;
              content: "";
              width: 0;
              height: 0;
              border: 15px solid transparent;
              border-left-color: #bfe2e6;
            }
          }
        }

        div.right {
          box-sizing: border-box;
          flex: 1;
          padding-left: 20px;
          padding-right: 40px;
          padding-bottom: 40px;
          border-left: 2px solid #bfe2e6;

          h3 {
            position: relative;
            margin-bottom: 20px;
            margin-top: -10px;
            line-height: 25px;
            font-size: 20px;

            &::before {
              position: absolute;
              content: "";
              top: 10px;
              left: -23px;
              width: 4px;
              height: 4px;
              background-color: #000;
            }
          }

          p.img {
            margin-bottom: 20px;
          }

          p.company {
            color: #000;
            margin-bottom: 20px;
          }

          p.content {
            color: #777;
            letter-spacing: 1px;
            font-size: 16px;
            padding-bottom: 10px;
          }
        }

        &:last-child div.right {
          border-color: transparent;
        }
      }
    }
  }

  article.contact {
    .el-form {
      padding: 0 40px;
    }

    .el-button {
      display: block;
      width: 100px;
      height: 40px;
      margin-top: 35px;
      border: 0;
      border-radius: 20px;
      box-shadow: 0 0 0 #bbb;
      background-color: #bfe2e6;
      font-weight: 700;
      font-size: 16px;
      letter-spacing: 2px;
      font-family: Quicksand, "sans-serif";
      color: #000;
      outline: 0;
      cursor: pointer;
      transition: box-shadow .3s;

      &:hover {
        box-shadow: 0 3px 5px #bbb;
      }
    }
  }
}

</style>














