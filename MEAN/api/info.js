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

    // quan doi quan ngu dang doan cong  doan
    post_armypug: function (data) {
        console.log(data);
        return Info.findOne({staffCode: data["staffCode"]}, function (err, info) {
            if (info === null) {
                return Info(data).save();
            } else {
                info.armyPUG = data['armyPUG'];
                return info.save();
            }
        });
    },

    get_armypug: function (username) {
        console.log(username);
        return Info.findOne({staffCode: username}, "-_id armyPUG");
    },
    //------------------------------------------------

    //quan he gia dinh
    post_family: function (data) {
        console.log(JSON.stringify(data));
        return Info.findOne({staffCode: data["staffCode"]}, function (err, info) {
            if (info === null) {
                return Info(data).save();
            } else {
                info.family = data['family'];
                return info.save();
            }
        });
    },

    get_family: function (username) {
        console.log(JSON.stringify(username));
        return Info.findOne({staffCode: username}, "-_id family");
    },

    // hop dong lao dong
    post_contract: function (data) {
        console.log(JSON.stringify(data));
        return Info.findOne({staffCode: data["staffCode"]}, function (err, info) {
            if (info === null) {
                return Info(data).save();
            } else {
                console.log("data['contract'] " +JSON.stringify(data['contract']));
                info.contract = data['contract'];
                return info.save();
            }
        });
    },
    // hop dong lao dong
    get_contract: function (username) {
        console.log("get_contract " + JSON.stringify(username));
        return Info.findOne({staffCode: username}, "-_id contract");
    },
};
