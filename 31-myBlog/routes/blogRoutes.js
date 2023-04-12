const express = require('express')
const Blog = require('../models/blog')
// 每个express应用程序都内置了router()，通过调用router创建实例对象
const routes = express.Router()
const blogController = require('../controllers/blogController.js')
// 变量
const blogName = '我的博客'
// 全部博客  GET 
routes.get('/', blogController.blog_index)
// 添加文章  get
routes.get('/add', blogController.blog_add_get)
// 添加博客  post、
routes.post('/add', blogController.blog_add_post)
// 博客详情  GET
routes.get('/:id', blogController.blog_details)
// 删除博客  DELETE
routes.delete('/:id', blogController.blog_delete)
module.exports = routes