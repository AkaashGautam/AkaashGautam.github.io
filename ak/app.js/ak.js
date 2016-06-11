var http = require('http')

var server = http.createServer(function(req,res){
	res.writeHead(200,{"contentType":"text/html"})
	var name="akash"
	var department="mca"
	var year="2016"
	res.write("name="+name+"department="+department+"year="+year)
	res.end("")
})

server.listen(8080)
