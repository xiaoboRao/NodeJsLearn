/**
 * Created by 晓 on 2017/10/11.
 */
var fs=require('fs');

exports.getalbums=function (callback) {
    fs.readdir('./upload',function (err,files) {

        if(err)
        {
            throw Error('读取文件upload失败');
            return;
        }
        console.log(files);
        var album=[];
        (function itera(i) {
            if(i==files.length)
            {
                console.log(album);
                callback(album);
                return;
            }
            fs.stat('./upload/'+files[i],function (err,stats) {
                if(stats.isDirectory())
                {
                    album.push(files[i]);
                }
                //进行迭代；
                itera(i+1);
            })

        })(0);

    })
}
