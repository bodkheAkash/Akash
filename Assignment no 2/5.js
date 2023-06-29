var h = require('http');
var u = require('url');
var fs = require('fs');
var server = h.createServer(function(req,res){
	var url_p = u.parse(req.url, true);
	var path = url_p.pathname;   //    /home.html		
	var fname = path.substring(1);   //  home.html
	fs.readFile(fname, function(err,data) {
	   if(!err)
	   {
		res.writeHead(200,{'content-type':'text/html'});
	 	res.write(data.toString());	
		res.end();		
	   }
	   
       });
});

server.listen(9000,function() {console.log("SERVER STARted")})


/*var h=require('http');
var u=require('url');
var fs=require('fs');

var server=h.createServer(function(req,res){

var url_p=u.parse(req.url,true);
var path=url_p.pathname;
var fname=path.substring(1);
fs.readFile(fname,function(err,data){

if(!err)
{
 res.writeHead(200,{'content-type':'text/html'});
 res.write(data.toString());
 res.end();
}
else
{
 res.writeHead(200,{'content-type':'text/html'});
 res.write("<h1>File not found</h1>");
 res.end();
}

})

})
server.listen(9000,function(){console.log("Server created")})*/

