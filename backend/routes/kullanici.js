const express = require("express");

const router = express.Router();
const Kullanici = require("../models/kullaniciModel");
const jwt = require("jsonwebtoken");

const tokenOlustur = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1h" });
};

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const kullanici = await Kullanici.login(email, password);
    const token = tokenOlustur(kullanici._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res
      .status(400)
      .json({ hata: "kullaniciları login işlemi sırasında hata oluştu" });
  }
});
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const kullanici = await Kullanici.signup(username, email, password);
    const token = tokenOlustur(kullanici._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res
      .status(400)
      .json({ hata: "kullaniciları signup işlemi sırasında hata oluştu" });
  }
});
// bütün kullaniciları getir
router.get("/", async (req, res) => {
  try {
    const kullanicilar = await Kullanici.find().sort({ createdAt: -1 });
    console.log(kullanicilar);
    res.status(200).json(kullanicilar);
  } catch (error) {
    res
      .status(400)
      .json({ hata: "kullaniciları geirme işlemi sırasında hata oluştu" });
  }
});



//id ye göre kullanici silme işlemi
router.delete("/:id", async (req, res) => {
  console.log(req.params, "params");

  try {
    const { id } = req.params;

    const kullanici = await Kullanici.findOneAndDelete({ _id: id });

    res.status(200).json(kullanici);
  } catch (error) {
    res.status(400).json({
      hata: "id ye göre kullanici silme işlemi sırasında hata oluştu",
    });
  }
});

//id ye göre kullanici güncellme işlemi
router.put("/:email", async (req, res) => {
  try {
    const { id, email } = req.params;

    const kullanici = await Kullanici.findOneAndUpdate(
      { email: email },
      { ...req.body },
      { new: true }
    );

    res.status(200).json(kullanici);
  } catch (error) {
    res.status(400).json({
      hata: "id ye göre kullanici güncelleme işlemi sırasında hata oluştu",
    });
  }
});



//id ye göre kulaniciları güncellme işlemi
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const kullanici = await Kullanici.findById(id);

    res.status(200).json(kullanici);
  } catch (error) {
    res.status(400).json({
      hata: "id ye göre kullanici getirme işlemi sırasında hata oluştu",
    });
  }
});

router.put("/status/:id", async (req, res) => {

  
    try {
      const { id } = req.params;
      const { status } = req.body;


      const kullanici = await Kullanici.findByIdAndUpdate(
        { _id: id },
        { status },
        { new: true }
      );

      res.status(200).json(kullanici);
    } catch (error) {
      res.status(400).json({
        hata: "Kullanıcı durumu güncelleme sırasında hata oluştu",
      });
    }
});

module.exports = router;
