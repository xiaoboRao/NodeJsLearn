/**
 * Created by 晓 on 2017/10/11.
 */
var formidable=require('formidable');
var http=require('http');

http.createServer(function (req,res) {

    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./static/upload";
        //fields是所有请求参数的对象集合；files是文件集合
        form.parse(req, function(err, fields, files) {
            if(err)
            {
                throw  err;
                return;
            }
            res.writeHead(200, {'content-type': 'text/plain'});
            console.log(fields);
            console.log(files);
            res.write('received upload:\n\n');
            res.end("success");
        });
        return;
    }
    // show a file upload form
    // res.writeHead(200, {'content-type': 'text/html'});
    // res.end("success2");
}).listen(3000,'127.0.0.1');