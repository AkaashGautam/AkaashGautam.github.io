var http = require('http')
var server = http.createServer(function(req,res){
  res.writeHead(200,{"contentType":"text/html"})
res.write(
  "<!DOCTYPE html>"+
 "<html>"+
  "<head>"+
   "<title>"+ 
   "</title>"+
   "<h1>"+ 
   "Sample Form"+
   "</h1>"+ 
"</head>"+
  "<body bgcolor='yellow'>"+
"<form>"+
      
      "Enter name:<input type='text' style='border:2px solid blue'>"+
      "<br>"+
      "<br>"+
   
     "Enter password:<input type='password' style='border:2px solid green'>"+
     "<br>"+
     "<br>"+
   
      "<input type='submit' value='Login' style='border:2px solid red')"+
     
      "<br>"+
      "<br>"+
   
      
   

"</form>"+

"</body>"+

"</html>")
  res.end("")
})

server.listen(8080)
