/**
 * Created by 晓 on 2017/10/13.
 */
var express=require('express');
var app=express();
var db=require('./model/db.js');

app.get('/',function (req,res) {
        db.insertone('student',{"sex":1},function (err,result) {
            if(err)
            {
                res.send("插入失败");
                return;
            }
            // console.log(result);
        })
    res.send("插入成功");
})
app.get('/find',function (req,res) {
    //获取请求的page信息;
    var page=parseInt(req.query.page);
    db.find('student',{"sex":1},{"page":page,"amount":5},function (err,result) {
        if(err)
        {
            res.send("查找失败");
            return;
        }
        console.log(result);
        res.send(result);
    })

})
app.get('/delete',function (req,res) {
    db.delete('student',{"sex":1},function (err,result) {
        if(err)
        {
            res.send("删除失败");
            return;
        }
        res.send(result);
    })
})
app.get('/update',function (req,res) {
    db.updatemany('student',{"sex":1},{"sex":2},function (err,result) {
        if(err)
        {
            res.send("更新失败");
            return;
        }
        res.send("更改成功");
    });
})
app.listen(3000);