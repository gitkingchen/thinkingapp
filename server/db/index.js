var mongoose = require('mongoose');
mongoose.connect("mongodb://123.56.237.188:27000/thinking");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('db opened!')
});

db.on('disconnected', function () {
    console.log('mongoose disconnected')
})

module.exports = db;