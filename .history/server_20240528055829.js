// const http =require('http')
// http.createServer((req,resp)=>{
// resp.write("<h1>Hello  this is anil  ahirwar</h1>");
// resp.end();
// }).listen(4000);

const http =require('http');
function dataControl(req,resp){

    resp.write("<h1>Hello World anil  a this is email id</h1>");
    resp.end();
}
http.createServer(dataControl).listen(8000);