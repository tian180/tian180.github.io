const Blog = require('../models/blog')
// 变量
const blogName = '我的博客'
/* 
blog_index
blog_details
blog_add_get
blog_add_post
blog_delete
*/
const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then(data => {
            res.render('index', { blogName, title: '首页', blogs: data })
        })
        .catch(err => console.log(err))
}
const blog_add_get = (req, res) => {
    res.render('add', { blogName, title: ' 添加文章' })
}
const blog_add_post = (req, res) => {
    const document = new Blog(req.body)
    document.save()
        .then(data => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err)
        })
}
const blog_delete = (req, res) => {
    // 获取动态的值
    const id = req.params.id
    // 通过blog数据模型跟数据库做交互：删除指定id的document
    Blog.findByIdAndDelete(id)
        .then(data => {
            res.json({ redirect: '/' })
        })
        .catch(err => console.log(err))
}
const blog_details = (req, res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(data => {
            res.render('details', { blogName, title: '博客详情', blog: data })
        })
        .catch(err => console.log(err))
}

module.exports = {
    blog_index,
    blog_details,
    blog_add_get,
    blog_add_post,
    blog_delete
}