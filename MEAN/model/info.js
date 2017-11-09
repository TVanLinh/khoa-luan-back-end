var mongoose = require('mongoose');

//create Schema
var infoShema = new mongoose.Schema({
    staffCode: String,
    cv: {
        fullName: String,
        nameOther: String,
        avatarUrl: String,
        sex: String,
        email: String,
        phone: String,
        birthDay: Date,
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
        hashNation: Boolean,
        nation: String,
        identity: {identityNumber: String, dateRange: Date, placeRange: String},
        placeRegisterHouseHold: String,//noi dang ki ho khau thuong tru
        policyObject: String,
        bloodGroup: String
    }
});


//create model
module.exports = mongoose.model('Info', infoShema);
