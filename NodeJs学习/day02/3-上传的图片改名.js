/**
 * Created by 晓 on 2017/10/11.
 */
var formidable=require('formidable');
var http=require('http');
var mom=require('./node_modules/moment');
var path=require('path');
var fs=require('fs');

http.createServer(function (req,res) {

    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./static/upload/";
        //fields是所有请求参数的对象集合；files是文件集合
        form.parse(req, function(err, fields, files) {
            if(err)
            {
                throw  err;
                return;
            }

            var time=new Date();
            time=mom(time).format('YYYYMMDDHHmmss');
            console.log(time);
            var extname=path.extname(files.tupian.name);

            //__dirname是相对于本文件的路径；
            var newpath=__dirname+'/static/upload/'+time+extname;
            console.log(newpath);
            //获取上次上传的文件路径;
            var oldpath=__dirname+'/'+files.tupian.path;
            console.log(oldpath);
            fs.rename(oldpath,newpath,function(err) {
                if(err)
                {
                    throw Error('改名失败');

                }
                console.log(fields);
                console.log(files);
                // res.write('received upload:\n\n');
                res.writeHead(200, {'content-type': 'text/plain'});
                res.end("success");
            });
            // res.write('received upload:\n\n');
            // res.end("success2");

        });
        // return;
    }
    else {
        res.writeHead(404, {'content-type': 'text/plain'});
        res.end("失败");
    }
    // show a file upload form
    // res.writeHead(200, {'content-type': 'text/html'});
    // res.end("success2");
}).listen(3000,'127.0.0.1');