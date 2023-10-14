var express=require("express");
var app=express();
var port=4000;//neu trung thi doi port
var Layouts = require('express-ejs-layouts');//goi thu vien layout

app.use(express.static("public"));//đường dẫn thưu mục public
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(Layouts);//se chay trang co ten layout teen trong ngoặc là tên biến đã đặt bên trên

app.set("view engine","ejs");//đuôi mở rộng ejs
app.set("views","./views");//thư mục view
app.listen(port);

app.get("/",function(req, res){
    res.render("trangchu.ejs");
})
app.get("/gioi-thieu",function(req, res){
    res.render("gioithieu.ejs");
})

