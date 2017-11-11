const Nation = require('../model/nation');
module.exports = {
    get_index: function () {
        let a = [
            {
                "code": "kinh",
                "name": "Kinh"
            },
            {
                "code": "tay",
                "name": "Tày"
            },
            {
                "code": "thai",
                "name": "Thái"
            },
            {
                "code": "muong",
                "name": "Mường"
            },
            {
                "code": "khome",
                "name": "Khơ Me"
            },
            {
                "code": "hmong",
                "name": "H'Mông"
            },
            {
                "code": "nung",
                "name": "Nùng"
            },
            {
                "code": "hoa",
                "name": "Hoa"
            },
            {
                "code": "dao",
                "name": "Dao"
            },
            {
                "code": "giarai",
                "name": "Gia Rai"
            },
            {
                "code": "ede",
                "name": "Ê Đê"
            },
            {
                "code": "bana",
                "name": "Ba Na"
            },
            {
                "code": "xodang",
                "name": "Xơ Đăng"
            },
            {
                "code": "sanchay",
                "name": "Sán Chay"
            },
            {
                "code": "coho",
                "name": "Cơ Ho"
            },
            {
                "code": "cham",
                "name": "Chăm"
            },
            {
                "code": "sandiu",
                "name": "Sán Dìu"
            },
            {
                "code": "hre",
                "name": "Hrê"
            },
            {
                "code": "raglai",
                "name": "Ra Glai"
            },
            {
                "code": "mnong",
                "name": "M'Nông"
            },
            {
                "code": "xtieng",
                "name": "X’Tiêng	"
            },
            {
                "code": "bruvankieu",
                "name": "Bru-Vân Kiều"
            },
            {
                "code": "tho",
                "name": "Thổ"
            },
            {
                "code": "khomu",
                "name": "Khơ Mú"
            },
            {
                "code": "cotu",
                "name": "Cơ Tu"
            },
            {
                "code": "giay",
                "name": "Giáy"
            },
            {
                "code": "gietrieng",
                "name": "Giẻ Triêng"
            },
            {
                "code": "taoi",
                "name": "Tà Ôi"
            },
            {
                "code": "ma",
                "name": "Mạ"
            },
            {
                "code": "co",
                "name": "Co"
            },
            {
                "code": "choro",
                "name": "Chơ Ro"
            },
            {
                "code": "Xinh Mun",
                "name": "xinhmun"
            },
            {
                "code": "hanhi",
                "name": "Hà Nhì"
            },
            {
                "code": "churu",
                "name": "Chu Ru"
            },
            {
                "code": "lao",
                "name": "Lào"
            },
            {
                "code": "khang",
                "name": "Kháng"
            },
            {
                "code": "lachi",
                "name": "La Chí"
            },
            {
                "code": "phula",
                "name": "Phù Lá"
            },
            {
                "code": "lahu",
                "name": "La Hủ"
            },
            {
                "code": "laha",
                "name": "La Ha"
            },
            {
                "code": "pathen",
                "name": "Pà Thẻn"
            },
            {
                "code": "chut",
                "name": "Chứt"
            },
            {
                "code": "lu",
                "name": "Lự"
            },
            {
                "code": "lolo",
                "name": "Lô Lô"
            },
            {
                "code": "mang",
                "name": "Mảng"
            },
            {
                "code": "colao",
                "name": "Cờ Lao"
            },
            {
                "code": "boy",
                "name": "Bố Y"
            },

            {
                "code": "cong",
                "name": "Cống"
            },
            {
                "code": "ngai",
                "name": "Ngái"
            },
            {
                "code": "sila",
                "name": "	Si La"
            },
            {
                "code": "pupeo",
                "name": "Pu Péo"
            },

            {
                "code": "romam",
                "name": "Rơ măm"
            },
            {
                "code": "brau",
                "name": "Brâu"
            },
            {
                "code": "odu",
                "name": "Ơ Đu"
            },
            {
                "code": "other",
                "name": "Khác"
            }
        ];

        return Nation.find();
    },
};