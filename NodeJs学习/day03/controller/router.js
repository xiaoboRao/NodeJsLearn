/**
 * Created by 晓 on 2017/10/11.
 */
var albums=require('../models/albums')
var formidable=require('formidable');
var fs=require('fs');
var path=require('path');
exports.showindex=function (req,res) {
    // res.render('../views/index.ejs',{
    //     //这样写不是异步的写法，会导致出错；
    //     // imgs:albums.getalbums(),
    //
    // });
    albums.getalbums(function (albums) {
        res.render('../views/index.ejs',{
            imgs:albums,
        })
    })
}
exports.upimg=function (req,res) {
    //获取图片的文件集；
    albums.getalbums(function (albums) {
        res.render('up',{
          imgs:albums,
        })
    })

}
exports.doupimg=function (req,res,next) {

        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./tempimg";

        //fields是所有请求参数的对象集合；files是文件集合


        form.parse(req, function(err, fields, files) {
            if (err) {
                throw  err;
               next();
            }
            var size=parseInt(files.img.size);
            if(size>230000)
            {
                res.end('图片应小于23m');
                fs.unlink(path.normalize(__dirname+'/../'+files.img.path));
                return;

            }
            res.writeHead(200, {'content-type': 'text/plain'});
            console.log(fields);
            console.log(files);
            console.log(path.normalize(__dirname+'/../upload/'+fields.file));
            var oldpath=files.img.path;
            var newpath=path.normalize(__dirname+'/../upload/'+fields.file+'/'+files.img.name);
            fs.rename(oldpath,newpath,function (err) {
                if(err)
                {
                    res.send("上传图片失败");
                    // res.end();
                    return;
                }

                res.send("success");
            })

        });
}