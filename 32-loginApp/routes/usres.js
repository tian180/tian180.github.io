//核心：写数据模型就要用：1.mongoose.Schema({},{})  3.
//2.数据模型：mongoose.model(')

//'users/login'
const express = require('express')
const router = express.Router()

router.get('/login',(req,res) => {
    // res.send('登录')
    res.render('login')
})
//'users/register'
router.get('/register',(req,res) => {
    // res.send('注册')
    res.render('register')
})

module.exports = router