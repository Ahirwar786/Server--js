const http =require('http')
http.createServer((req,resp)=>{
resp.write("<h1Hello  this is anil  ahirwar");
resp.end();
}).listen(4000);
