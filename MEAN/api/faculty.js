const Faculty = require('../model/faculty');
module.exports = {
    o_get_index :function () {
        var a  = {
            roleId:null,
            type:"Khoa",
            Name: "Cong nghe thong tin thong thong "
        };
        Faculty.findById("59f0a896bb7fde10fe3454f0",function (err,result) {
            if (err) return handleError(err);
            result.Name = "Tran van linh gfgfgfgf  fddfd" ;
            result.save(function (err, update) {
                console.log(update);
            });
        });
        return Faculty.find();

    },

    o_get_all :function () {
        return Faculty.find();
    }

};
