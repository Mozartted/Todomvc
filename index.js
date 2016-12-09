//the server components.
var express=require("express");
var mongoose=require("mongoose");
var path = require('path');
var config= require('./config')
var routes=require('./server/routes');


mongoose.connect(config.db);

var app=express();

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

app.set('port',process.env.PORT||3000);
app.use(express.static(path.join(__dirname,'app')));

/*
|-------------------------------------------------
| Route's Configurations
|-------------------------------------------------
| Routes Configurations from server/routes
*/
routes(app);
