<template>
  <div id="Message">
    <article class="a1">
      <h2>留言板</h2>
      <p class="des">请文明发言，禁止广告。不然拉黑了嗷\(^o^)/~</p>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        maxlength='100'
        show-word-limit
        v-model="textarea">
      </el-input>
      <div class="btn">
        <div class="left">
          <i class="iconfont icon-biaoqing" @click.stop="showEmoji"></i>
          <div class="emoji" v-if="ifShowEmoji">
            <ul>
              <li
                v-for="item in emoji"
                :key="item"
                @click.stop="clickEmoji(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <el-button
          type="primary"
          size="mini"
          @click="submit"
        >发表
        </el-button>
      </div>
    </article>
    <article class="a2">
      <ul>
        <li v-for="item in msgList" :key="item._id">
          <div class="parent">
            <div
              class="left"
              :style="{backgroundImage: `url(${baseURL}${item.author.photo})`}"
            ></div>
            <div class="right">
              <div class="name-time">
                <span>{{ item.author.user }}</span>
                <span>{{ formatDate(item.date) }}</span>
              </div>
              <div class="message">
                {{ item.text }}
              </div>
              <div class="like-reply">
                <i
                  class="like iconfont icon-xinaixin"
                  :class="{
                    isLike: userInfo._id && item.likes.includes(userInfo._id)
                  }"
                  @click="parentLikeClick(item._id)"
                ></i>
                <span>{{ item.likes.length }}</span>
                <i
                  class="reply iconfont icon-huifu"
                  @click="parentReplyClick(item)"
                ></i>
              </div>
            </div>
          </div>
          <div
            class="child"
            v-for="(childItem,index) in item.children"
            :key="childItem._id"
          >
            <div
              class="left"
              :style="{backgroundImage: `url(${baseURL}${childItem.author.photo})`}"
            ></div>
            <div class="right">
              <div class="name-time">
                <span>{{ childItem.author.user }}</span>
                <span>{{ formatDate(childItem.date) }}</span>
              </div>
              <div class="message">
                <span>@{{ childItem.replyUser.user }}</span>{{ childItem.text }}
              </div>
              <div class="like-reply">
                <i
                  class="like iconfont icon-xinaixin"
                  :class="{
                    isLike: userInfo._id && childItem.likes.includes(userInfo._id)
                  }"
                  @click="childLikeClick(item._id, childItem._id, index)"
                ></i>
                <span>{{ childItem.likes.length }}</span>
                <i
                  class="reply iconfont icon-huifu"
                  @click="childReplyClick(item,childItem)"
                ></i>
              </div>
            </div>
          </div>
          <div
            class="replyInput"
            :class="{
              show: item.ifShowReply
            }"
          >
            <el-input
              size="mini"
              :placeholder="`@${item.replyUser.user}`"
              v-model="item.replyTxt"
            ></el-input>
            <el-button
              type="primary"
              size="mini"
              @click="replySubmit(item)"
            >提交
            </el-button>
          </div>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "Message",
  data() {
    return {
      //留言内容
      textarea: "",
      //用于展示/隐藏 emoji选择框
      ifShowEmoji: false,
      //emoji数组
      emoji: [
        "😃", "😁", "😂", "😊", "🙃", "🥰", "😘", "🤭", "🤔", "😏",
        "😵", "😟", "🙁", "😳", "😰", "😭", "😖", "😡", "😠", "😈",
        "🤡", "☠️", "👻", "🙈", "🙉", "❤️", "💖", "💢", "💣", "💤",
        "👋", "👍", "👌", "🤞", "🤟", "🤙", "👊", "🖕", "🤝", "🙏",
        "🙅", "🙅‍♂️", "👨‍✈️", "👩‍✈️", "👷", "👷‍♀️", "🤦", "🤦‍♂️", "👴", "🧓",
        "🐴", "🐮", "🐖", "🐑", "🐓", "🦚", "🐲", "🐳", "🐟", "🐌",
      ],
      //所有留言列表
      msgList: []
    }
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    //显示表情框
    showEmoji() {
      this.ifShowEmoji = !this.ifShowEmoji
    },

    //表情图标点击
    clickEmoji(item) {
      if (this.textarea.length > 98) return
      this.textarea += item
    },

    //提交留言
    async submit() {
      //没有登录的话，给提示
      if (!this.userInfo.user) {
        return this.$message.error("请先登录")
      }

      //留言内容为空
      let val = this.textarea.trim()
      if (!val) {
        return this.$message.error("请输入留言内容")
      }

      //发送到后端
      let {data} = await this.$axios({
        method: "POST",
        url: "/msg/submit",
        data: {val}
      })
      //失败
      if (data.code) {
        return this.$message.error(data.msg)
      }
      //成功
      this.$message.success("留言成功") //提示
      this.textarea = "" //内容清空
      this.getMsg() //重新请求留言数据

    },

    //请求所有留言数据
    async getMsg() {
      let {data} = await this.$axios({
        method: "GET",
        url: "/get/msg"
      })

      let d = data.data
      d.forEach(item => {
        item.ifShowReply = false //用于控制回复框显不显示
        item.replyTxt = "" //回复框的内容绑定
        item.replyUser = item.author //提示框文字内容
      })

      this.msgList = d
    },

    //转换日期显示
    formatDate(date) {
      let d = new Date(date),
        YY = d.getFullYear(),
        MM = d.getMonth() + 1,
        DD = d.getDate(),
        hh = d.getHours(),
        mm = d.getMinutes(),
        ss = d.getSeconds()

      MM = (MM < 10 ? "0" : "") + MM
      DD = (DD < 10 ? "0" : "") + DD
      hh = (hh < 10 ? "0" : "") + hh
      mm = (mm < 10 ? "0" : "") + mm
      ss = (ss < 10 ? "0" : "") + ss

      return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`
    },

    //父级点赞按钮点击
    async parentLikeClick(id) {
      //判断用户是否登录
      if (!this.userInfo.user) {
        return this.$message.error("请先登录")
      }

      //已登录
      let {data} = await this.$axios({
        method: "POST",
        url: "/msg/like/parent",
        data: {id} //传递评论的id给后端
      })

      //操作失败
      if (data.code) {
        return this.$message.error(data.msg)
      }

      //操作成功
      //重新请求评论数据
      this.getMsg()

    },
    //子级点赞按钮点击
    async childLikeClick(pID, cID, cIndex) {
      //判断用户是否登录
      if (!this.userInfo.user) {
        return this.$message.error("请先登录")
      }

      //发送请求
      let {data} = await this.$axios({
        method: "POST",
        url: "/msg/like/child",
        data: {pID, cID, cIndex}
      })

      if (data.code) {
        return this.$message.error(data.msg)
      }

      this.getMsg()

    },

    //回复提交
    async replySubmit(item) {
      //判断用户是否登录
      if (!this.userInfo.user) {
        return this.$message.error("请先登录")
      }

      let text = item.replyTxt.trim()

      //验证数据格式
      if (!text) {
        return this.$message.error("请输入回复内容")
      }
      if (text.length > 100) {
        return this.$message.error("回复字数不能超过100")
      }

      //发送数据到后端
      let {data} = await this.$axios({
        method: "POST",
        url: "/msg/reply/submit",
        data: {
          id: item._id,
          text,
          replyUser: item.replyUser._id
        }
      })

      if (data.code) {
        return this.$message.error(data.msg)
      }

      this.$message.success("回复成功")
      this.getMsg()

    },

    //回复按钮的点击
    parentReplyClick(item) {
      //判断用户是否登录
      if (!this.userInfo.user) {
        return this.$message.error("请先登录")
      }
      //通过判断 @ 的名字一样不一样，来决定是否是展开
      if (item.author._id !== item.replyUser._id){
        item.ifShowReply = true
      }else{
        item.ifShowReply = !item.ifShowReply
      }
      //改变replyUser
      item.replyUser = item.author
    },

    //子回复按钮点击
    childReplyClick(item, childItem) {
      //判断用户是否登录
      if (!this.userInfo.user) {
        return this.$message.error("请先登录")
      }
      //通过判断 @ 的名字一样不一样，来决定是否是展开
      if (childItem.author._id !== item.replyUser._id){
        item.ifShowReply = true
      }else{
        item.ifShowReply = !item.ifShowReply
      }
      //改变replyUser
      item.replyUser = childItem.author
    }
  },
  created() {
    //请求留言数据
    this.getMsg()
  },
  mounted() {
    //点击document的时候emoji消失
    document.addEventListener("click", () => {
      this.ifShowEmoji = false
    })
  }
}
</script>

<style lang="less" scoped>
#Message {
  article {
    box-sizing: border-box;
    width:100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background-color: #fff;
    font-family: Quicksand, Microsoft YaHei, sans-serif;

    h2 {
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }

    p {
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;
    }
  }

  article.a1 {
    .el-textarea {
      margin-top: 15px;
    }

    :deep(textarea)  {
      font-family: "Quicksand", "微软雅黑";
      font-size: 12px;
      letter-spacing: 2px;
      height: 70px;
    }

    .btn {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;

      .left {
        position: relative;
      }

      i {
        font-size: 20px;
        cursor: pointer;
      }

      .emoji {
        position: absolute;
        top: 30px;
        background-color: #fff;
        padding: 8px;
        box-shadow: 0 0 3px #aaa;
        user-select: none;

        &::before {
          content: "";
          position: absolute;
          z-index: 3;
          top: -10px;
          left: 5px;
          width: 0;
          height: 0;
          border: 5px solid transparent;
          border-bottom-color: #ccc;
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          width: 250px;

          border-left: 1px solid #e5e5e5;
          border-bottom: 1px solid #e5e5e5;

          li {
            box-sizing: border-box;
            float: left;
            width: 25px;
            height: 25px;
            border-right: 1px solid #e5e5e5;
            border-top: 1px solid #e5e5e5;
            font-size: 18px;
            line-height: 25px;
            cursor: pointer;
          }
        }
      }
    }
  }

  article.a2 {
    user-select: none;

    ul li {
      padding-bottom: 5px;
      margin-bottom: 10px;
      border-bottom: 1px dashed #ddd;
      font-size: 12px;
      font-family: Microsoft YaHei, "sans-serif";

      .child {
        margin-left: 55px;
        margin-top: 3px;
      }

      .parent, .child {
        display: flex;

        .left {
          overflow: hidden;
          width: 40px;
          height: 40px;
          margin-right: 15px;
          border-radius: 50%;
          background: none top center/cover;
        }

        .right {
          flex: 1;

          .name-time {
            font-size: 12px;
            margin-bottom: 3px;

            span:nth-child(1) {
              color: #73b899;
            }

            span:nth-child(2) {
              color: #aaa;
              margin-left: 10px;
            }
          }

          .message {
            color: #666;
            letter-spacing: 2px;
            margin-bottom: 3px;
            word-break: break-word;

            span {
              color: #409eff;
              margin-right: 5px;
            }
          }

          .like-reply {
            i {
              cursor: pointer;
              font-size: 14px;
              color: #aaa;
            }

            i.isLike {
              color: #f30606;
            }

            span {
              display: inline-block;
              width: 43px;
              font-size: 12px;
              color: #aaa;
            }
          }
        }
      }

      .replyInput {
        box-sizing: border-box;
        overflow: hidden;
        width: 100%;
        height: 0;
        padding-left: 55px;
        transition: height .3s;
        margin-top: 10px;

        &.show {
          height: 57px;
        }

        .el-button {
          padding: 0 9px !important;
          float: right;
        }
      }
    }
  }
}
</style>














