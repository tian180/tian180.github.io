//写路由？思考：想到只能用express写路由
//express中提供几种配置路由的方式：
//方式1：app.get() app.post() app.put() app.delete()
//方式1：express.Router()
const express = require('express')
const router = express.Router()
//router对象提供了:app.get() app.post() app.put() app.delete()
// router.get('请求地址',(req,res) => {
//     res.send()
//     res.sendFile()
//     res.json()
//     res.render()
//     res.redirect()
// })
router.get('/',(req,res) => {
    // res.send('首页')
    res.render('index')
})

module.exports = router