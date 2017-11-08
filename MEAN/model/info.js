var mongoose = require('mongoose');

//create Schema
var infoShema = new mongoose.Schema({
    codeUser: String,
    cv: {
        fullName: String,
        nameOther: String,
        avatarUrl: String,
        sex: String,
        email: String,
        phone: String,
        placeBirth: {
            city: String,
            district: String,
            guild: String
        },
        homeTown: {
            city: String,
            district: String,
            guild: String
        },
        placeNow: {
            city: String,
            district: String,
            guild: String,
            street: String,
            numberHome: String
        },
        iNation: Boolean,
        nation: String,
        identity: {identityNumber: String, dateRange: String, placeRange: String},
        placeRegisterHouseHold: String,//noi dang ki ho khau thuong tru
        policyObject: String,
        bloodGroup: String
    }
});


//create model
module.exports = mongoose.model('Info', infoShema);
