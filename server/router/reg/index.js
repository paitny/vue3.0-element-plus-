const express = require("express")
const router = express.Router()
const userDB = require("../../db/user")

//注册提交
router.post("/", async (req, res) => {
  let {user, pass} = req.body

  //验证数据
  if (!/^[\w\u4e00-\u9fa5\u0800-\u4e00\uac00-\ud7ff]{2,8}$/.test(user) || !/^[\w\[\]\/\\~`|<>,.?;':"{}!@#$%^&*()_+=-]+$/.test(pass)) {
    return res.send({
      code: 1,
      msg: "数据格式错误"
    })
  }

  //验证用户是否存在
  let doc = await userDB.findOne({user})
  if (doc){
    return res.send({
      code: 2,
      msg: "用户已存在"
    })
  }

  //存到数据库
  await userDB.create({user, pass})

  //返回成功数据
  res.send({
    code: 0,
    msg: "注册成功"
  })

})

module.exports = router



