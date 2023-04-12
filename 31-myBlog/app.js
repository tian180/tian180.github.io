/*******  引入模块**********/
// 引入第三方express模块：用于构建基于node的app实例
const express = require('express')
// 引入第三方ejs模板：用于构建app的试图
const ejs = require('ejs')
//引入内部path模块：用于处理构建App过程中的路径
const path = require('path')
//引入第三方mongoose模块：用于处理构建App过程中的路径
const mongoose = require('mongoose')
// console.log(mongoose);
//引入本地blog模块：用于与MongoDB数据库通信
const Blog = require('./models/blog')
// 引入本地blogroutes路由表文件
const blogRoutes = require("./routes/blogRoutes")

/* 初始化App */
//创建app实例（基于服务器的app实例)
const app = express()
/**********自定义变量*********/
// 变量
const blogName = '我的博客'
/**********配置App*********/
// 配置试图引擎
app.set('view engine', 'ejs')
//配置要公开暴露的静态资源
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded())
/**********连接云数据库*********/
//云数据库的连接字符串
const uri = 'mongodb+srv://laoba:tl050426@laoba.w0zxwhb.mongodb.net/?retryWrites=true&w=majority'
//mongoose.connect(连接字符串)：用于连接数据库，它是一个异步操作，返回一个Promise对象
mongoose.connect(uri)
    //请求成功时，拿到成功的结果值：result（也可写data，名字无所谓)
    .then((result) => {
        //向控制台输出数据库连接成功的提示信息
        console.log('数据库连接成功')
        //调用app的listen方法，监听服务器端口，即监听有没有请求进来，如果有就通知回调函数
        app.listen(3000), () => {
            //向控制台输出服务器启动成功的提示信息
            console.log('服务器已经运行在http://127.0.0.1:3000');
        }
    })
    //请求失败时，拿到失败的原因值：err（也可写error，名字无所谓)
    .catch(err => {
        console.log('数据库连接失败', err)
    })
/* **********路由*********** */
// 首页
app.get('/', (req, res) => {
    res.redirect('/blogs')
})
// about关于
app.get('/about', (req, res) => {
    res.render('about', { blogName, title: '关于' })
})
/* ********************************博客路由开始：/blogs************************************* */
// 定义：user用于为app注册中间件函数(回调函数)
// 语法：app.use("",callback)
app.use('/blogs', blogRoutes)
/* ********************************博客路由结束************************************* */
// 404 page
app.use((req, res) => {
    let title = '404'
    res.status(404).render('404', { blogName, title: '404' })

})
