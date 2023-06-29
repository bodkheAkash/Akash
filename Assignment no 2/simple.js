var exp=require('express');

var app=exp();//like create the server

app.get('/home',function(req,res){

 res.send("<h1>Hey Good Morning!</h1>")
  
});