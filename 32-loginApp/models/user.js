// 引入mongoose模块
const mongoose = require('mongoose')
// 1.创建数据结构模型：mongoose.Schema({字段定义},{选项对象})
// username,password,passwprd2,phone,email
const userSchema = mongoose.Schema({

},{})
// 2.创建数据模型：mongoose.model('模型名称,数据结构模型名)//返回值是一个构造函数
const User = mongoose.model('User',userSchema)
module.exports = User