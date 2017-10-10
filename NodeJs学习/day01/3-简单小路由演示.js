/**
 * Created by 晓 on 2017/10/10.
 */
var http=require('http');
var url=require('url');
http.createServer(function (req,res) {
    var url=req.url;
    //substr提取从下标开始的几个数字；
    var id=url.substr(9);
    res.writeHead(200,{"Content-Type":"text/html"});
    if(url.substr(0,9)=="/student/")
    {
        //匹配长度为6位数，test返回的时boolen，；
        if(/^\d{6}$/.test(id))
        {
            console.log(url.substring(0,9)+id);
            res.end();
        }
        else {
            console.log("id位数不对");
            res.end();
        }
    }
    else if(url.substr(0,9)=="/teacher/"){
        if(/^\d{6}$/.test(id))
        {
            console.log(url.substring(0,9)+id);
            res.end();
        }
        else {
            console.log("id位数不对");
            res.end();
        }
    }

}).listen(3000,'127.0.0.1');