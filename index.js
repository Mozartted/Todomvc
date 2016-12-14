//the server components.
var express=require("express");
var mongoose=require("mongoose");
var path = require('path');
var config= require('./config')
var routes=require('./server/routes');

var app=express();
var port=process.env.PORT||3000;

config.dbconnect();

// Force HTTPS on heroku
if(process.env.NODE_ENV === 'production') {
  app.enable("trust proxy");
  app.use (function (req, res, next) {
      if(req.secure) {
        //request was via https, so do no special handling
        next();
      } else {
        //request was via http, so redirect to https
        res.redirect('https://' + req.headers.host + req.url);
      }
  });
}

app.set('port',port);
app.use(express.static(path.join(__dirname,'app')));

/*
|-------------------------------------------------
| Route's Configurations
|-------------------------------------------------
| Routes Configurations from server/routes
*/
routes(app);

app.get('*', function(req, res) {
    /** frontend routes =========================================================
      * route to handle all angular requests
      * load the single view file (angular will handle the page changes on the front-end)
      **/
     res.sendFile(__dirname + '/app/index.html' );
});


/**
 * Start Express server.
 */
app.listen(port, function(){
  console.log("Todo Angular Listening on port ", port);
});
