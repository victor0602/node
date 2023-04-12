// 导入依赖
const express = require('express')
// 引入连接池模块
const pool = require('../pool')
// 使用router
const router = express.Router()

router.get('/login',(req,res,next)=>{
    var obj = req.params
    // 查询用户信息表中所有的数据
    let a = 'select * from user_info where username = ?'
    pool.query(a,(err,r) =>{
        console.log(result);
        if(err){
            console.log('错误',err);
        }
        if(result[0].user_password == user_password){

        }
    })
})