const Backend = require('../model/resource');

module.exports = {
    get_index: function(){
        return Backend.find();
    },
    put_index: function(backend) {
        return Backend(backend).save();
    },
    post_index: function(backend){
        return Backend.findByIdAndUpdate(backend._id, backend);
    },
    get_activated: function(){
        return Backend.find({activated: true}, 'title description').lean();
    }
};
