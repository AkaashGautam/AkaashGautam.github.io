var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){
	var page=url.parse(req.url).pathname
	res.writeHead(200,{"contentType":"text/html"})

if(page=="/login"){

	res.write("welcome jii")
}
 else if(page=="/signup"){

	res.write("welcome hii")
}
 else{

 	res.write("welcome byyy")
}

	res.end("")
	})

	server.listen(8080)
