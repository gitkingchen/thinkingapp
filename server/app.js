var express = require('express');
var app = express();
var router = require('./route');
app.use(router);

// 数据库连接
var db = require('./db');
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
});