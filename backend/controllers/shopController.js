const { model } = require("mongoose");
const ShopCartModel = require("../models/shopCartModel");
const mongoose = require("mongoose");

const shopCartOlustur = async (req, res) => {
  const { resim, ucret, baslik, kilogram, aciklama } = req.body;

  try {
    const shopCart = await ShopCartModel.create({
      resim,
      ucret,
      baslik,
      kilogram,
      aciklama,
    });
    res.status(200).json(shopCart);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const shopCartsGetir = async (req, res) => {
  const shopCarts = await ShopCartModel.find().sort({ createdAt: -1 });
  res.status(200).json(shopCarts);
};

const shopCartGetir = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID Geçersiz" });
  }

  const cart = await ShopCartModel.findById(id);
  if (!cart) {
    return res.status(404).json({ hata: "Cart Bulunamadı" });
  }
  res.status(200).json(cart);
};

const shopCartSil = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID Geçersiz" });
  }

  const cart = await ShopCartModel.findOneAndDelete({ _id: id });
  if (!cart) {
    return res.status(404).json({ hata: "Cart Bulunamadı" });
  }
  res.status(200).json(cart);
};
const shopCartGuncelle = async (req, res) => {
  const { id } = req.params;

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
};

module.exports = {
  shopCartOlustur,
  shopCartsGetir,
  shopCartGetir,
  shopCartSil,
  shopCartGuncelle,
};
