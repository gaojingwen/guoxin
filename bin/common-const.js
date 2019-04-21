// const favicon = require('serve-favicon');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const express = require('express');
const lessMiddleware = require('less-middleware');
const cookieParser = require('cookie-parser');
const path = require('path');

const initNunjucks = function (app, dirName) {
    nunjucks.configure('views', {
        autoescape: true,
        express: app
    });
    // app.use(favicon(path.join(dirName, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(lessMiddleware(path.join(dirName, 'public')));
    app.use('/', express.static(path.join(dirName, 'public')));
    app.use(function (req, res, next) {
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', 0);
        next();
    })
};

const initErrorHandle = function (app) {
    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        let err = new Error(req.url + ' NOT Found ');
        err.status = 404;
        err.req = JSON.stringify({url: req.url, method: req.method});
        next(err);
    });

    app.use(function (err, req, res, next) {
       console.error(err.stack);
       res.status(err.stack);
       if(err.status && err.status === 404) {
           res.render('404.html');
       }else {
           res.render('500.html');
       }
    });
};

module.exports =  {
    initNunjucks,
    initErrorHandle
}