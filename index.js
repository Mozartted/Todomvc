//the server components.
var express=require("express");
var mongoose=require("mongoose");
var path = require('path');
var request = require('request');
var config= require('./config')
var routes=require('./server/route');

mongoose.connect(config.db);

var app=express();

app.set('port',process.env.PORT||3000);
app.use(express.static(path.join(__dirname,'app')));


//setting up express values
