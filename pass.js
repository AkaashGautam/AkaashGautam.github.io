var express=require('express')
var app=express()
app.get('/course/:courseName',function(req,res){
res.render("login.ejs",{
	data:req.params.courseName
})
res.end()
})
app.listen(808)
console.log("executed");
