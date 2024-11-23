const http=require("http");
const url =require("url");
const fs=require("fs");
const mime=require("mime-types").lookup

const MyServer= http.createServer(function(req,res){

  let filepath=req.url;
  console.log(filepath);

  if(req.url == "/"){
    filepath = '/index.html';
    }
  const RequestedFile=  "./layout" + filepath;

  fs.readFile(RequestedFile, (err,data) => {
    if (err) {
        res.end('<h1>Server Error</h1>');
    } else {
      let fileType = mime(RequestedFile);
        res.writeHead(200, { 'Content-Type': fileType });
        res.end(data);
    }
});

}).listen(8000);

