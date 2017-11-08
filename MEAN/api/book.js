const Book = require('../model/book');
module.exports = {
    //authenticationCode_httpVerb_name
    //authentication u
    //authorization o
    //httpVerb: get post put delete
    //read
    get_index: function(){
        return Book.find();
    },
    //create
    put_index: function(book){
        return Book(book).save();
    },
    //update
    post_index: function(book){
        return Book.findByIdAndUpdate(book._id, book);
    },
    //delete
    'delete_index/:id': function(id){
        return Book.findByIdAndRemove(id);
    }
}
