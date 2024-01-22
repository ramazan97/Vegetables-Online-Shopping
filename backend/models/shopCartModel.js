// monggose içerisinde bulunan schema kullanıyoruz
const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const shopCartSema = new Sema(
  {
    resim: {
      type: String,
    },
    ucret: {
      type: String,
    },
    baslik: {
      type: String,
      required: [true, "Baslik zorunlu olarak girilmelidir"],
    },
    kilogram: {
      type: String,
    },
    aciklama: {
      type: String,
    },
    //  kullanici_id:{
    //    type:String,
    //    required:true
    //  }
  },
  {
    // zaman damgasını aktif etmek maksatlı kullandık
    timestamps: true,
  }
);
// ('Not',notSema) isim ve shema vermemiz lazım
module.exports = mongoose.model("ShopCart", shopCartSema);

// const mongoose = require("mongoose");
// const Sema = mongoose.Schema;

// const shopSema = Sema(
//   {
//     baslik: {
//       type: String,
//       require: true,
//     },
//     aciklama: {
//       type: String,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = mongoose.model("SHOP", shopSema);
