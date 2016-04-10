var express = require('express');
var router = express.Router();


// Homepage
router.get('/', function(req, res) {
      			res.render('home_page');
});
router.get('/test', function(req, res) {
            res.render('view1');
});
router.get('/test1', function(req, res) {
            res.render('view1');
});

router.get('/test2', function(req, res) {
            res.render('view2');
});

router.get('/test3', function(req, res) {
            res.render('view3');
});
router.get('/test4', function(req, res) {
            res.render('view4');
});

router.get('/about', function(req, res) {
            res.render('about');
});
module.exports = router;
