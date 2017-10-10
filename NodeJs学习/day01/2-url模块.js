/**
 * Created by 晓 on 2017/10/10.
 */
var http=require("http");
var url=require("url");
http.createServer(function (req,res) {
    console.log(req.url);
    var path=url.parse(req.url).pathname;
    //第二个参数是否将query转化为json对象
    var query=url.parse(req.url,true).query;
    var age=query.age;
    console.log("paht:"+path);
    //不能将之转化为字符串；
    console.log(query);
    console.log("age:"+age);
    res.end();
    
}).listen(3000,'127.0.0.1');