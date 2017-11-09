const Info = require('../model/info');
module.exports = {


    get_index: function () {
        var cv = new Info({
            username: "Tran Van Linh",
            cv: {
                fullName: "",
                nameOther: "",
                sex: "",
                email: "",
                phone: "",
                placeBirth: {city: "", district: "", guild: ""},
                homeTown: {city: "", district: "", guild: ""},
                hashNation: true,
                nation: "",
                identity: {identityNumber: "", dateRange: "", placeRange: ""},
                placeRegisterHouseHold: "",//noi dang ki ho khau thuong tru
                policyObject: "",
                bloodGroup: ""
            }

        });
        // Info.remove({staffCode: "appAdmin"}, function (err) {
        //
        // });
        return Info.find();
    },


    //---so yeu li lich -------------------------------
    get_cv: function (username) {
        console.log(username);
        return Info.findOne({staffCode: username});
    },

    post_cv: function (data) {
        console.log(data);

        return Info.findOne({staffCode: data["staffCode"]}, function (err, info) {
            if (info === null) {
                return Info(data).save();
            } else {
                info.cv = data['cv'];
                return info.save();
            }
        });
    },

    //------------------------------------------------


};
