/**
 * Created by 晓 on 2017/10/11.
 */
var express=require('express');
var app=express();

//提供静态文件；
app.use(express.static('./publc'));
//设置模板引擎;
app.set('view engine','ejs');
app.get('/',function (req,res) {
    //render是要定向的模板引擎，并将数据传入；
    res.render('haha',{
        news:["i am here","yes i am here","yes i am really here"],
    })
})
app.get('/haha',function (req,res) {
    res.send('我是hahh');
})

app.listen(3000);
