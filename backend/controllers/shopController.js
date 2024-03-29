// const { model } = require("mongoose");
// const ShopCartModel = require("../models/shopCartModel");
// const mongoose = require("mongoose");

// const shopCartOlustur = async (req, res) => {
//   const { resim, ucret, baslik, kilogram, aciklama } = req.body;
//   let bosAlanlar = [];
//   if (!baslik) {
//     bosAlanlar.push("baslik");
//   }
//   if (bosAlanlar.length > 0) {
//     return res.status(400).json({ hata: "Alanlar bos geçilemez", bosAlanlar });
//   }
//   try {
//     // burada kullanici_id yazarak kullanıcıya göre id işlemi yaptık
//     const kullanici_id = req.kullanici._id;
//     const shopCart = await ShopCartModel.create({
//       baslik,
//       ucret,
//       aciklama,
//       resim,
//       kilogram,
//       kullanici_id,
//     });
//     res.status(200).json(shopCart);
//   } catch (error) {
//     res.status(400).json({ hata: error.message });
//   }
// };

// const shopCartsGetir = async (req, res) => {
//   // burada kullanici_id yazarak kullanıcıya göre sepete ürün getirimini yapacaz
//   // const kullanici_id = req.kullanici._id;
//   // const shopCarts = await ShopCartModel.find({kullanici_id}).sort({ createdAt: -1 });
//   // res.status(200).json(shopCarts);
//   const shopCarts = await ShopCartModel.find().sort({ createdAt: -1 });
//   res.status(200).json(shopCarts);
// };

// const shopCartGetir = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ hata: "ID Geçersiz" });
//   }

//   const cart = await ShopCartModel.findById(id);
//   if (!cart) {
//     return res.status(404).json({ hata: "Cart Bulunamadı" });
//   }
//   res.status(200).json(cart);
// };

// const shopCartSil = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ hata: "ID Geçersiz" });
//   }

//   const cart = await ShopCartModel.findOneAndDelete({ _id: id });
//   if (!cart) {
//     return res.status(404).json({ hata: "Cart Bulunamadı" });
//   }
//   res.status(200).json(cart);
// };
// const shopCartGuncelle = async (req, res) => {
//   const { id } = req.params;

//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ hata: "ID Geçersiz" });
//   }

//   const cart = await ShopCartModel.findOneAndUpdate(
//     { _id: id },
//     { ...req.body },
//     { new: true }
//   );
//   if (!cart) {
//     return res.status(404).json({ hata: "Cart Bulunamadı" });
//   }
//   res.status(200).json(cart);
// };

// module.exports = {
//   shopCartOlustur,
//   shopCartsGetir,
//   shopCartGetir,
//   shopCartSil,
//   shopCartGuncelle,
// };
