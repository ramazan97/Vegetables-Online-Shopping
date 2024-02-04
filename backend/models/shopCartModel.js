// monggose içerisinde bulunan schema kullanıyoruz
const mongoose = require("mongoose");

const Sema = mongoose.Schema;

const shopCartSema = new Sema(
  {
    resim: {
      type: String,
      required: [true, "resim zorunlu olarak girilmelidir"],
    },
    ucret: {
      type: String,
      required: [true, "ucret zorunlu olarak girilmelidir"],
    },
    baslik: {
      type: String,
      required: [true, "Baslik zorunlu olarak girilmelidir"],
    },
    kilogram: {
      type: String,
      required: [true, "kilogram zorunlu olarak girilmelidir"],
    },
    aciklama: {
      type: String,
      required: [true, "aciklama zorunlu olarak girilmelidir"],
    },
    // burada kullanıcıya göre sepete ürüün eklemek için bu işlemi kullanacaz
    kullanici_id: {
      type: String,
      required: true,
    },
  },
  {
    // zaman damgasını aktif etmek maksatlı kullandık
    timestamps: true,
  }
);
// ('Not',notSema) isim ve shema vermemiz lazım
module.exports = mongoose.model("ShopCart", shopCartSema);
