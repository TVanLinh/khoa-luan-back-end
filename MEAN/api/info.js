const Info = require('../model/info');
// var CV = require("../model/type/cv");
module.exports = {
    u_get_index: function () {
        console.log("ok");
        var cv = new Info({
            codeUser: "Tran Van Linh",
            cv: {
                fullName: "",
                nameDifferent: "",
                sex: "",
                email: "",
                phone: "",
                placeBirth: {city: "", district: "", guild: ""},
                homeTown: {city: "", district: "", guild: ""},
                iNation: true,
                nation: "",
                identity: {identityNumber: "", dateRange: "", placeRange: ""},
                placeRegisterHouseHold: "",//noi dang ki ho khau thuong tru
                policyObject: "",
                bloodGroup: ""
            }

        });
        // Info(cv).save();
        return Info.find();
    },

    post_index: function (data) {
        console.log(data);
        return {ok: "ok"};
    },
}
