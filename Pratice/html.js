var h=require('http')

var server=h.createServer(function(req,res){

   res.writeHead(200,{'content-type':'text/html'});
   res.write("<h1>Hey you are ohk </h1>");
   res.write("<p>Be happy</p>");
   res.end()

});
 server.listen(9000,function(){
  console.log("server started")
})