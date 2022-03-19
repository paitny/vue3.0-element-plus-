<template>
  <div id="About">
    <article>
      <h2>ABOUT ME</h2>
      <p>文静这个形容词，大概就是为我而创造的吧😏</p>
      <p>谢谢你这么好看还这么关注我鸭！我叫亚鹏，你可以亲切的叫我小鹏！或者小梵、小梵梵</p>
      <p>座右铭：对他人负责，对自己负责</p>
      <p>注意：我是一名技术大师 把你的电脑黑来玩玩</p>
    </article>
    <article>
      <h2>ABOUT SITE</h2>
      <p class="code"><code>前 &nbsp;端：</code><span>Html + Vue + Element</span></p>
      <p class="code"><code>后 &nbsp;端：</code><span>Node + Nuxt + Express + Mongodb</span></p>
      <p class="border"><code>服务器：</code><a href="https://www.aliyun.com/1111/new?userCode=xqfx5ty6" target="_blank">阿里云ECS</a></p>
      <p>这个博客我在2020年就开始构思了，终于在2021年上线了！我真棒！😂</p>
      <p>这不能怪我...真的...每当我好不容易挤点时间写好代码准备上线时，总有前端技术在这个时间点做大的更新...ES2015、Node、Vue、Nuxt...我也很绝望啊，每次都是推翻重写，裂开...</p>
    </article>
    <article>
      <h2>ABOUT COPYRIGHT</h2>
      <p>源码开源：<a href="https://github.com/wypty" target="_blank">小梵梵的github</a></p>
      <p>在注明出处的前提下，本站文章允许非商业用途的转载。</p>
    </article>
    <article>
      <h2>OTHER</h2>
      <p>我是一名前端开发者，也是一名在校大学生（2020年入学），如果前端这块有问题的话，可以通过 <a href="/#contact">contact me</a> 联系我。或者可以在👈左侧边栏找到我的联系方式哦。</p>
    </article>
  </div>

</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="less" scoped>
#About{
  article{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 15px;
    box-shadow: 0 0 4px #ddd;
    padding: 25px 20px;
    background:#fff;
    font-family: Quicksand,Microsoft YaHei,sans-serif;
    background-size: 100%;
    h2{
      margin-bottom: 15px;
      font-size: 20px;
      letter-spacing: 3px;
      line-height: 24px;
      border-left: 5px solid #73b899;
      text-indent: 10px;
    }
    p{
      text-indent: 2em;
      color: #444;
      font-size: 14px;
      letter-spacing: 4px;
      line-height: 30px;
      code{
        font-family: Quicksand,Microsoft YaHei,sans-serif;
        letter-spacing: 4px;
      }
      a{
        color: #409eff;
        &:hover{
          text-decoration: underline;
        }
      }
    }
    p.code span{
      color: #bd4147;
      background-color: rgba(27,31,35,.05);
      font-weight: 700;
    }
    p.border{
      border-bottom: 1px dotted rgb(170, 170, 170);
    }
  }
}

</style>














