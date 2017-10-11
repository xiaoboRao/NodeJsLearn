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
    //4.异步读取文件状态
    fs.readdir('./album/',function (err,files) {
        //这是个自启动迭代函数，从零开始
        (function iteraotr(i) {
            if(i==files.length)
            {
                return;

            }

                fs.stat('./album/'+files[i],function (err,stats) {
                        if(stats.isFile())
                        {
                            console.log(files[i]+"  is file");
                        }
                    })
                iteraotr(i+1);

        })(0);
        res.end();
    });
}).listen(3000,'127.0.0.1');