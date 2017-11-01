const Faculty = require('../model/faculty');
module.exports = {
    get_index :function () {
        var a  = {
            roleId:null,
            type:"Khoa",
            Name: "Cong nghe thong tin"
        };

        Faculty.remove({},()=>{

		console.log("remove success");
		Faculty(a).save();
	});
         
       //console.log("ok ok ok" +JSON.parse(Faculty.find()).length);
        return Faculty.find();
    },

    o_get_all :function () {
        return Faculty.find();
    }

};
