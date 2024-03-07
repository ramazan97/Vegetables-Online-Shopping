const { model } = require("mongoose");
const ShopCartModel = require("../models/shopCartModel");
const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();
// bütün ürünleri getirme
router.get("/", async (req, res) => {
  // burada kullanici_id yazarak kullanıcıya göre sepete ürün getirimini yapacaz
  // const kullanici_id = req.kullanici._id;
  // const shopCarts = await ShopCartModel.find({kullanici_id}).sort({ createdAt: -1 });
  // res.status(200).json(shopCarts);
  try {
    const shopCarts = await ShopCartModel.find().sort({ createdAt: -1 });
    res.status(200).json(shopCarts);
  } catch (error) {
    res.status(400).json({ hata: "shop işlemi sırasında hata oluştu" });
  }
});
//id ye göre ürün getirme işlemi
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ hata: "ID Geçersiz" });
    }

    const cart = await ShopCartModel.findById(id);
    if (!cart) {
      return res.status(404).json({ hata: "Cart Bulunamadı" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res
      .status(400)
      .json({ hata: "shop işlemini idye göre getirme  sırasında hata oluştu" });
  }
});
//ürün oluşturma işlemi
router.post("/", async (req, res) => {
  // const { resim, ucret, baslik, kilogram, aciklama } = req.body;
  const { name, img, kilogram, price, description } = req.body;
  console.log(req.body);
  let bosAlanlar = [];
  if (!name) {
    bosAlanlar.push("name");
  }
  if (bosAlanlar.length > 0) {
    return res.status(400).json({ hata: "Alanlar bos geçilemez", bosAlanlar });
  }
  try {
    // burada kullanici_id yazarak kullanıcıya göre id işlemi yaptık
    // console.log(req,"req");
    // const kullanici_id = req.kullanici._id;
    // console.log(kullanici_id,"kullanici_id");
    const shopCart = await ShopCartModel.create({
      name,
      img,
      kilogram,
      price,
      description,
      // kullanici_id,
    });
    res.status(200).json(shopCart);
  } catch (error) {
    res.status(400).json({ hata: error.message });
    console.log("shop işleminde post sırasında hata oluştu");
  }
});
//id ye göre ürün silme işlemi
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ hata: "ID Geçersiz" });
    }

    const cart = await ShopCartModel.findOneAndDelete({ _id: id });
    if (!cart) {
      return res.status(404).json({ hata: "Cart Bulunamadı" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ hata: error.message });
    console.log("shop işlemi sırasında delete yaparken hata oluştu");
  }
});
//id ye göre ürün güncellme işlemi
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ hata: "ID Geçersiz" });
    }

    const cart = await ShopCartModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    if (!cart) {
      return res.status(404).json({ hata: "Cart Bulunamadı" });
    }
    res.status(200).json(cart);
  } catch (error) {
    res.status(400).json({ hata: error.message });
    console.log("shop işlemi sırasında put yaparken hata oluştu");
  }
});
//id ye göre ürün getirme işlemi
router.get("/search/:productName", async (req, res) => {
  try {
    const productName = req.params.productName;
    const products = await ShopCartModel.find({
      name: { $regex: productName, $options: "i" },
    });

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "Server error. ürün arama işlemi sırasında hata oluştu" });
  }
});
module.exports = router;
