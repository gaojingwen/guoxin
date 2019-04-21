var express = require('express');
var app = express();
var common = require('./bin/index');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
common.commonConst.initNunjucks(app, __dirname);
var maxCookieAge = 30 * 24 * 60 * 60 * 1000;
app.use('/', indexRouter);
app.use('/users', usersRouter);
common.commonConst.initErrorHandle(app);
common.commonServe.startServer(8888, app)
