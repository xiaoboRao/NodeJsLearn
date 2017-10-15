/**
 * Created by 晓 on 2017/10/15.
 */
var mongoose = require('mongoose');
var db  = mongoose.createConnection('mongodb://127.0.0.1:27017/haha');
db.on('open', function(callback) {
    console.log("打开成功");
});
module.exports=db;
