const http =require('http')
http.createServer((req,resp)=>{
resp.write("Hello  this is anil  ahirwar");
resp.end();
}).listen(40);
