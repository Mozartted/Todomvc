var mongoose = require('mongoose');

//creating the schema
var Todo =  mongoose.Schema({
    title:  { type: String },
    completed: { type: Boolean},
});

module.exports=mongoose.model('Todo',Todo);
