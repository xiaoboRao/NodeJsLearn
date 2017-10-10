/**
 * Created by 晓 on 2017/10/10.
 */
//1.引入http模块
var http=require("http");
//2.创建服务器；
var server=http.createServer(function (req,res) {
    //设置响应头；
    res.writeHead(200,{ 'Content-Type': 'text/html;charset=Utf-8' });

    //等价于res.setHeader("Content-Type","text/html;charset=Utf-8");
   console.log("q2123");
   //一定要end否则会一直等待结束；
    res.end("wolaile");
});
//3.监听端口
server.listen(3000,"127.0.0.1");