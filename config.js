var mongoose   = require('mongoose'),
    connectDb = process.env.MONGODB || process.env.MONGOHQ_URL;

var db = mongoose.connection;
mongoose.connect(connectDb);

module.exports = {
  dbconnect: function(){
    db.on('error', console.error.bind( console, 'MongoDB Connection Error. Please make sure that MongoDB is running.'));
    db.once('open', function callback(){
      console.log('Yourtube db opened');
    });
  }
};
