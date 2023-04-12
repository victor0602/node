// 导入依赖
const express = require('express')
// 引入连接池模块
const pool = require('../pool')
// 使用router
const router = express.Router()

// 博客信息接口(get)
router.get('/',(req,res,next)=>{
    var obj = req.params
    console.log("==========",obj)
    let a = 'select * from user_info'
    // err ==> 错误信息
    // r   ==>执行语句后的信息
    pool.query(a,(err,r) =>{
        if(err){   
            return next(err)
        }
        res.send({list:r});
    })
})

module.exports = router