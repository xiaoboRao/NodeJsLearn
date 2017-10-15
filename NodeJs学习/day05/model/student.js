/**
 * Created by 晓 on 2017/10/15.
 */
var mongoose=require("mongoose");
var db=require('./db');
var mongooseSchema = new mongoose.Schema({
    username : {type : String},
    age      : {type : Number},
    sex      : {type : String}
});

// // 添加 mongoose 实例方法，需要new出来可用；
// mongooseSchema.methods.findbyusername = function(username, callback) {
//     return this.model('mongoose').find({username: username}, callback);
// }

//添加静态方法，model可用；
mongooseSchema.statics.findbyusername = function(username, callback) {
     this.model('mongoose').find({username: username}, callback);
}
mongooseSchema.statics.gengxin=function(conditions, update, options, callback){
     this.model('mongoose').update(conditions, update, options, callback);
}
var mongooseModel = db.model('mongoose', mongooseSchema);
module.exports=mongooseModel;