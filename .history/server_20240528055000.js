// const http =require('http')
// http.createServer((req,resp)=>{
// resp.write("<h1>Hello  this is anil  ahirwar</h1>");
// resp.end();
// }).listen(4000);

const http =require("http");
http.createServer((req,resp)=>{
resp.write("Hello World this is email id")
resp.end()
}).listen(8000);