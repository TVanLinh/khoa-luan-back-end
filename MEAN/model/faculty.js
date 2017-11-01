var mongoose = require('mongoose');

var RoleFacultySchema = new mongoose.Schema({
    roleId: String,
    type:String,
    Name: String
});

module.exports = mongoose.model('faculty', RoleFacultySchema);
