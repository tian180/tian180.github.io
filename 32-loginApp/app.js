//先引入内置模块
const path = require('path')

//再引入第三方模块 就是npm i 创建的
const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const mongoose = require('mongoose')

//最后引入本地模块 就是自己创建的js文件routea
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/usres')

//创建app实例（相当于创建了服务器）
const app = express()

//创建路由
const router = express.Router()

//配置服务器(监听) process.env：环境变量
const PORT = process.env.PORT || 3000
app.listen(PORT,() => console.log(`服务器已运行在${PORT}`))

//配置数据库
const dbURI = require('./config/keys').dbURI
mongoose.connect(dbURI)
        .then(() => console.log('数据库连接成功：http://localhost:3000'))
        .catch(err => console.log(err))

//配置app
app.use(express.static(path.join(__dirname,'public'))) //暴露出去css和js
app.use(expressLayouts)
app.set('view engine','ejs')

//配置路由:1.基本路由 2.users路由
app.use('/',require('./routes/index'))
app.use('/usres',require('./routes/usres'))
// app.use('/users',usersRoutes)
