var http=require('http');
var url=require('url');

var server=http.createServer(function(req,res){

var url_p=url.parse(req.url,true);
console.log(url_p.pathname);
console.log(url_p.query.name);
console.log(url_p.query.last);
res.write("<h1 style='color:green;'>welcome "+url_p.query.name+" "+url_p.query.last+"</h1>")
res.end();

});

server.listen(9000,function(){console.log("server started")});