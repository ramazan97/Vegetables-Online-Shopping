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
  const shopCarts = await ShopCartModel.find().sort({ createdAt: -1 });
  res.status(200).json(shopCarts);
});
//id ye göre ürün güncellme işlemi
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID Geçersiz" });
  }

  const cart = await ShopCartModel.findById(id);
  if (!cart) {
    return res.status(404).json({ hata: "Cart Bulunamadı" });
  }
  res.status(200).json(cart);
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
    console.log("hata varrr");
  }
});
//id ye göre ürün silme işlemi
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ hata: "ID Geçersiz" });
  }

  const cart = await ShopCartModel.findOneAndDelete({ _id: id });
  if (!cart) {
    return res.status(404).json({ hata: "Cart Bulunamadı" });
  }
  res.status(200).json(cart);
});
//id ye göre ürün güncellme işlemi
router.patch("/:id", async (req, res) => {
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
});

module.exports = router;

// ----------------------------------------------------------------
// body: {
//   name: 'Ürün Adı',
//   img: [
//     'https://e-commerce-udemy.netlify.app/img/products/product1/1.png',
//     'https://e-commerce-udemy.netlify.app/img/products/product1/2.png',
//     'https://e-commerce-udemy.netlify.app/img/products/product1/3.png',
//     'https://e-commerce-udemy.netlify.app/img/products/product1/2.png'
//   ],
//   reviews: [ [Object], [Object] ],
//   description: 'Ürün açıklaması',
//   colors: [ 'Mavi', 'Kırmızı', 'Yeşil' ],
//   kilogram: [ 'S', 'M', 'L' ],
//   price: { current: 50, discount: 40 },
//   category: '650cb032054382a2c88bf42e'
// },
// _body: true,
// length: undefined,
// _eventsCount: 0,
// route: Route { path: '/', stack: [ [Layer] ], methods: { post: true } },
// [Symbol(shapeMode)]: true,
// [Symbol(kCapture)]: false,
// [Symbol(kHeaders)]: {
//   'content-type': 'application/json',
//   'user-agent': 'PostmanRuntime/7.36.3',
//   accept: '*/*',
//   'postman-token': '7f7055d5-e5e3-4696-b684-3695c27d65d9',
//   host: 'localhost:4000',
//   'accept-encoding': 'gzip, deflate, br',
//   connection: 'keep-alive',
//   'content-length': '1059'
// },
// [Symbol(kHeadersCount)]: 16,
// [Symbol(kTrailers)]: null,
// [Symbol(kTrailersCount)]: 0
// } req
// ----------------------------------------------------------------
// {

//       "name": "Ürün Adı",
//       "img": [
//           "https://e-commerce-udemy.netlify.app/img/products/product1/1.png",
//           "https://e-commerce-udemy.netlify.app/img/products/product1/2.png",
//           "https://e-commerce-udemy.netlify.app/img/products/product1/3.png",
//           "https://e-commerce-udemy.netlify.app/img/products/product1/2.png"
//       ],
//       "reviews": [
//           {
//               "text": "Bu ürün harika!",
//               "rating": 5,
//               "user": "5fbc7c318f4e3d4e9c53b27e"
//           },
//           {
//               "text": "Fiyatı çok yüksek.",
//               "rating": 2,
//               "user": "5fbc7c318f4e3d4e9c53b27e"
//           }
//       ],
//       "description": "Ürün açıklaması",
//       "colors": [
//           "Mavi",
//           "Kırmızı",
//           "Yeşil"
//       ],
//       "kilogram": [
//           "S",
//           "M",
//           "L"
//       ],
//       "price": {
//           "current": 50,
//           "discount": 40
//       },
//       "category": "650cb032054382a2c88bf42e"
//   }
