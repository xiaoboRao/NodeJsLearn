/**
 * Created by 晓 on 2017/10/10.
 */
var http=require('http');
var fs=require('fs');

http.createServer(function (req,res) {
    //1.读取文件
    // fs.readFile('./test/1.txt',function (data,err) {
    //     if(err)
    //     {
    //         console.log(err);
    //         return;
    //     }
    //     res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    //     res.end(data);
    // });
    //2.判断状态
    // fs.stat('./test/1.txt',function (err,stat) {
    //     if(err)
    //     {
    //         console.log(err);
    //         return;
    //     }
    //     if(stat.isFile)
    //     {
    //         console.log("isFile");
    //     }
    //
    // });
    //3.创建文目录
    // fs.mkdir('./hello');
    
}).listen(3000,'127.0.0.1');