/**
 * Created by 晓 on 2017/10/10.
 */
var http=require('http');
var fs=require('fs');
var url=require('url');
var path=require('path');
http.createServer(function (req,res) {
    var pathname=url.parse(req.url).pathname;
    console.log(pathname);
    if(pathname=='/favicon.ico')
    {
        return;
    }
        if(pathname.indexOf('.')==-1)
        {
            //如果输入的师文件名，则展示index.html;
            pathname='index.html';

        }

        var extname=path.extname(pathname);
        var pathname='./static/'+pathname;
        fs.readFile(pathname,function (err,data) {
            if(err)
            {
                throw err;
                return;
            }
            getMine(extname,function (mine) {
                res.writeHead(200,{'Content-Type':mine});
                res.end(data);
            });

        });
}).listen(3000,'127.0.0.1');

//不同的后缀名，设置不同的Content-Type；
function getMine(extname,callback) {
    fs.readFile('./mime.json',function (err,data) {
        if(err)
        {
            throw err;
        }
        //奖json数据转化为数组类型;
        var data=JSON.parse(data);
        // console.log(data);
        // console.log(data[extname]);
        //data['a]对象的另一种寻找元素内容的方式;
        callback(data[extname]);
    });
}