// 导入依赖
const express = require('express')
const cors = require('cors')
// 引入routes
const blog_content = require('./routes/blog_content')
const user_info = require('./routes/user_info')
const app = express()
// 监听端口
app.listen(3000,()=>{
    console.log('服务器启动成功')
})
// 将post传参转为对象
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use('/blog_content',blog_content)
app.use('/user_info',user_info)