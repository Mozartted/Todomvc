var mongoose          = require('mongoose'),

    Todo      =  mongoose.Schema({
    title:      { type: String },
    complete:         { type: Boolean},
    
});
