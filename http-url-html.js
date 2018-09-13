var http=require("http");
var fs=require("fs");
var server=http.createServer();
server.on('request',function(req,res){
    var url=req.url;
    if(url==="/"){
        fs.readFile("./helloword.html",function(err,data){
            if(err){
                res.setHeader("content-type","text/plain;charset=utf-8");
                res.end("文件读取失败,请稍后再试!")
            }else{
                res.setHeader("content-type","text/html;charset=utf-8");
                res.end(data);
            }
        })
    }
    if(url==="/style.css"){
        fs.readFile("./style.css",function(err,data){
            if(err){
                res.setHeader("content-type","text/plain;charset=utf-8");
                res.end("文件读取失败,请稍后再试!")
            }else{
                res.setHeader("content-type","text/css;charset=utf-8");
                res.end(data);
            }
        })
    }
    console.log(req.socket.remoteAddress,":",req.socket.remotePort);
})
server.listen(5000,function(res,req){
    console.log('server is running...');

})