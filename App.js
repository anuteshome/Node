const http=require("http");
const url =require("url");
const fs=require("fs");

const MyServer=http.createServer(function(req,res){
if(req.url === "/"){
  res.write("<h1>this is Home page</h1>");
  res.end();
}else if(req.url === "/about"){
  res.write("<h1>This is abot page</h1>");
  res.end();
}else{
  res.write("<h1>page not found</h1>");
  res.end();
}

}).listen(5000);

