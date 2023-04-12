const mysql = require('mysql')
const pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'blog_info',
    connectionLimit: 15,
    multipleStatements: true
})
module.exports = pool