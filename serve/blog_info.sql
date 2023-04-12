--  丢弃数据库如果存在
drop database if exists blog_info;
-- 创建新的数据库
create database blog_info charset=utf8;
-- 进入数据库
use blog_info;
-- 新建博客信息表
create table blog_content{
    blog_ id int primary key auto_increment,
    blog_title varchar(32),
    blog_content text,
    author varchar(32),
};

-- 插入数据
insert into blog_content values(1,'123','123',123);
insert into blog_content values(2,'123','123',123);
insert into blog_content values(3,'123','123',123);
insert into blog_content values(4,'123','123',123);