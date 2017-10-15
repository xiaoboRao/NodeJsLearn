/**
 * Created by 晓 on 2017/10/13.
 */
var MongoClient = require('mongodb').MongoClient
var dburl=require('../seting');

exports.connect=function (callback) {
// Connection URL
    var url = dburl.dburl;
// Use connect method to connect to the Server passing in
// additional options
    MongoClient.connect(url, function(err, db) {

        console.log("Connected correctly to server");
        callback(err,db);
    });
}
exports.insertone=function (collectionname,json,cb) {
    if(arguments.length<3)
    {

    }
    this.connect(function (err,db) {
        db.collection(collectionname).insertOne(json, function(err, r) {
            cb(err,r);
                db.close();
            });
    })
}
exports.find=function (collectionname,json,D,C) {
    if(arguments.length==3)
    {
        var callback=D;
        var amount=0;
        var page=0;
    }
    else if(arguments.length==4)
    {
        var callback=C;
        var args=D;
        var amount=args.amount*args.page;
        var page=args.amount;
    }
    else {
        throw new Error("参数数量错误");
    }
        //1.获取数据库；
    this.connect(function (err,db) {
        //2.查找集合名，根据json数据获得数组集合；
        db.collection(collectionname).find(json).skip(amount).limit(page).toArray(function(err, docs) {
           if(err)

           {
               callback(err,null);
               return;
           }
            callback(null,docs);
            db.close();
        });


    })
}
exports.delete=function (collectionname,json,callback) {
this.connect(function (err,db) {
    db.collection(collectionname).deleteMany(json)
        .then(function(result) {
           callback(err,result);
        })
})
}
exports.updatemany=function (collection,json1,json2,callback) {
    this.connect(function (err,db) {
        db.collection(collection).updateMany(
            json1,
            { $set: json2})
            .then(function(result) {
                // process result
                callback(err,callback);
            })
    })
}