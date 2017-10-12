/**
 * Created by 晓 on 2017/10/11.
 */
/**
 * Created by 晓 on 2017/10/11.
 */
var express=require('express');
var bodyParser=require('body-parser');
var app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//use是只要路径中以/haha为根路径就触发；
// app.use('/haha',function (req,res) {
//     res.send(req.originalUrl);
// })
//若不设路径，则匹配所有；一开始就执行
// app.use(function (req,res,next) {
//    console.log(123);
//     next();
//
// })
//在中间件中，匹配了一个，就不会往下匹配；除非用next；
// app.get('/:username',function (req,res,next) {
//     // next();
//   res.send(req.params.username);
//
// })
// app.get('/haha',function (req,res) {
//     res.send('我是hahh');
// })


app.get('/',function (req,res) {
    res.render('form');
})
//post方法
//由于post方法中，express么有提供相应的获取参数的方法，所以用了个body-parser来获取传来的参数；
app.post('/',function (req,res) {
    // res.setHeader('Content-Type', 'text/plain');
    res.send(req.body);
});
app.listen(3000);
