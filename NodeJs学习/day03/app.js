/**
 * Created by 晓 on 2017/10/11.
 */
var express=require('express');
var router=require('./controller/router.js');

var app=express();

app.set('view engine','ejs');
app.use(express.static('./public'));
app.get('/',router.showindex);
app.get('/up',router.upimg);
app.post('/doupload',router.doupimg);
//如果没有路由，则最后实现；
app.use(function (req,res) {
    res.render('err');
})
app.listen(3000);