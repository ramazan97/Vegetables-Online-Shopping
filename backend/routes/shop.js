const express = require("express");
const ShopCartModel = require("../models/shopCartModel");
const {
  shopCartOlustur,
  shopCartsGetir,
  shopCartGetir,
  shopCartSil,
  shopCartGuncelle,
} = require("../controllers/shopController");
const router = express.Router();

router.get("/", shopCartsGetir);
router.get("/:id", shopCartGetir);
router.post("/", shopCartOlustur);
router.delete("/:id", shopCartSil);
router.patch("/:id", shopCartGuncelle);

module.exports = router;
