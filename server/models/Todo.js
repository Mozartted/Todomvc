var mongoose = require('mongoose');

//creating the schema
var Todo =  mongoose.Schema({
    title:  { type: String },
    complete: { type: Boolean},
});

module.exports=mongoose.model('Todo',Todo);
