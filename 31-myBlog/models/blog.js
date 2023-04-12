//引入mongoose模块：用于构建MongoDB数据库模型
const mongoose = require('mongoose')
//引入Schema类：用于构建数据库表模型
const { Schema } = mongoose
//通过Schema类，实例化一个对象，用来定义的数据库表的结构。new Schema({定义表模型，必写},{选项对象:描述表模型，可选})
const blogSchema = new Schema({
    //定义title字段
    title: {
        //字段类型：字符串
        type: String,
        //字段是否必写: true
        required: true
    },
    author: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true })
// 定义blog数据模型：mongoose.model(名字，表结构)
//mongoose.model()：用于定义与数据库通信的模型。语法:mongoose.model('交互模型名称',{数据库表模型}) 
const Blog = mongoose.model('Blog', blogSchema)
//导出Blog模块，注意：Blog是大写的，Blog()是构造函数
module.exports = Blog