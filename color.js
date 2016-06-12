var express=require('express')
var app=express()

app.get('/login',function(req,res){
	var array2=["red","green","yellow"]
	res.render('login.ejs',{
		data:array2
	});
	});
	app.listen(8080)
	console.log('executed')
