var mongoose = require('mongoose');


//create Schema
var bookSchema = mongoose.Schema({
    title: String,
    noPage: Number,
    price: Number,
    createOn: {type: Date, default: Date.now}
});

//create model
module.exports =
    mongoose.model('Book', bookSchema);
