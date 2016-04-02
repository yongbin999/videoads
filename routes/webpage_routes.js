var express = require('express');
var router = express.Router();


// Homepage
router.get('/', function(req, res) {
      			res.render('home_page');
});
router.get('/test', function(req, res) {
            res.render('index');
});


module.exports = router;
