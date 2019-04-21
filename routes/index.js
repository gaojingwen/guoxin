var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./index.html', { title: 'Express' });
});
// 法律法规
router.get('/cms_01', function(req, res, next) {
    res.render('./01/index.html', { title: 'Express' });
});
router.get('/cms_01/_01/:number', function(req, res, next) {
    const number = req.params.number;
    res.render('./01/body.html', { title: 'Express', number });
});

// 基础知识
router.get('/cms_02', function(req, res, next) {
    res.render('./02/index.html', { title: 'Express' });
});

// 适当管理性
router.get('/cms_03', function(req, res, next) {
    res.render('./01/index.html', { title: 'Express' });
});

// 风险警示
router.get('/cms_04', function(req, res, next) {
    res.render('./01/index.html', { title: 'Express' });
});

// 国信课堂
router.get('/cms_05', function(req, res, next) {
    res.render('./02/index.html', { title: 'Express' });
});
router.get('/cms_05/_01', function(req, res, next) {
    res.render('./05/body.html', { title: 'Express' });
});

// 基地风采
router.get('/cms_06', function(req, res, next) {
    res.render('./07/index.html', { title: 'Express' });
});

// 意见征集
router.get('/cms_07', function(req, res, next) {
    res.render('./07/index.html', { title: 'Express' });
});

// 满意度调查
router.get('/cms_08', function(req, res, next) {
    res.render('./07/first.html', { title: 'Express' });
});

// 测评题目
router.get('/cms_09', function(req, res, next) {
    res.render('./07/body.html', { title: 'Express' });
});

module.exports = router;
