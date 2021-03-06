var express	= require('express');
var session	= require('express-session');
var flash = require('connect-flash');

// These are the regular express built-in middleware:
var path = require('path');
var favicon	= require('serve-favicon');
var logger		= require('morgan');
var cookieParser	= require('cookie-parser');
var bodyParser		= require('body-parser');


// Our user-defined routes/middleware:
var homepage_api       	= require('./routes/webpage_routes');


// Create the express application:
var app = express();

// Setup the view engine:
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret : 'octocat',
                  saveUninitialized : true,
                  resave : true }));
app.use(flash());


// ADDITION:
// Using our routes/middleware:
app.use('/', homepage_api);

//start up the server by loading database in !!!//
var sys = require('util')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
//exec("ls ", puts);




/////////////////
//EVERYTHING BELOW HELPS WITH MISSING ROUTES
/////////////////

//catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// Export the app as the module:
module.exports = app;
