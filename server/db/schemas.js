var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ideaSchema = new Schema({
    content: {
        type: String,
    },
});


var Idea = mongoose.model('Idea', ideaSchema);
module.exports = Idea;