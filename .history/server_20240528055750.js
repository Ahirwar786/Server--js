// const http =require('http')
// http.createServer((req,resp)=>{
// resp.write("<h1>Hello  this is anil  ahirwar</h1>");
// resp.end();
// }).listen(4000);

const http =require('http');
function dataControl(req,resp){

    resp.write("<h1>Hello World this is email id</h1>");
    resp.end();
}
http.createServer((req,resp)=>{

}).listen(8000);