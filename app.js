const express = require('express')
const app = express()
const port = 3000;
const Path = require('path')
app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static(Path.join(__dirname,'public')));
require('./db')
const userModel= require('./userModel')

app.get('/',(req,res)=>{
    res.render("index");
})

app.get('/read',(req,res)=>{
    res.render('read')
})

app.listen(3000);