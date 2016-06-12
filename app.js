var express=require('express')
var app=express()
app.get('/login',function(req,res){
res.render("login.ejs")
res.end()
})
app.listen(808)
console.log("executed");
