var express = require('express');
var router = express.Router();


// Homepage
router.get('/', function(req, res) {
      			res.render('home_page');
});
router.get('/test', function(req, res) {
            res.render('view1');
});

router.get('/test2', function(req, res) {
            res.render('view2');
});


module.exports = router;
