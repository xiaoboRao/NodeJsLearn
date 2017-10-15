var mongooseModel=require('./model/student');
// var db=require('./model/db');
// 增加记录 基于 entity 操作;methods里面的方法可用
// var mongooseEntity = new mongooseModel({username:"234",age:2,sex:"男"});
// mongooseEntity.find({naem:"xiaobo"},function (err,result) {
//     if(err)
//     {
//         console.log(err);
//     }
//     else {
//         console.log(result);
//     }
// });
// mongooseEntity.update({name:"xiaobo"},{name:"bobo"},null,function (err) {
//     if(err)
//     {
//         console.log(err);
//     }
//     else {
//         console.log("：更改成功");
//     }
// })
//
// mongooseEntity.save(function (err) {
//     if(err)
//     {
//         console.log(err);
//     }else {
//         console.log("ok");
//
//     }
//     db.close();
// })
//
// 增加记录 基于model操作，可以使用static里面的方法
mongooseModel.create({username:"234",age:2,sex:"男"})
mongooseModel.gengxin({username:"xiaobo"},{$set:{username:"bobo",age:233}},{},function () {
    console.log("update success");
})
