const express = require("express")
const router = express.Router()
const messageDB = require("../../db/message")
const linkDB = require("../../db/link")
const articleDB = require("../../db/article")
const visitorDB = require("../../db/visitor")

//请求留言
router.get('/msg', async (req, res) => {
  let doc = await messageDB
    .find({}, {}, {sort: {date: -1}})
    .populate('author', {pass: 0, __v: 0})
    .populate('children.author', {pass: 0, __v: 0})
    .populate('children.replyUser', {pass: 0, __v: 0})

  res.send({
    code: 0,
    msg: "请求成功",
    data: doc
  })
})

//请求友链
router.get("/link", async (req, res) => {
  let data = await linkDB.find()
  res.send({
    code: 0,
    msg: "请求完成",
    data
  })
})

//请求文章
router.get("/article", async (req, res) => {
  let doc = await articleDB.find()

  res.send({
    code: 0,
    msg: "请求成功",
    data: doc
  })
})

//请求id对应的文章
router.get("/articleID", async (req, res) => {
  let {id} = req.query

  let doc = null
  try {
    doc = await articleDB.findById(id)
    if (doc) {

      //pv + 1
      await articleDB.findByIdAndUpdate(id, {$inc: {pv: 1}})

      res.send({
        code: 0,
        msg: "查询成功",
        data: doc
      })
    } else {
      res.send({
        code: 11,
        msg: "文章查询失败"
      })
    }
  } catch (e) {
    if (e.kind === "ObjectId") {
      res.send({
        code: 11,
        msg: "文章查询失败"
      })
    } else {
      res.send({
        code: 4,
        msg: "服务器错误，请稍后再试"
      })
    }
  }

})

//请求visitor
router.get("/visitor", async (req, res) => {
  let doc = await visitorDB
    .find({}, {}, {sort: {date: -1}})
    .populate("visitor", {pass: 0, __v: 0})

  res.send({
    code: 0,
    msg: "请求完成",
    data: doc
  })
})

module.exports = router









