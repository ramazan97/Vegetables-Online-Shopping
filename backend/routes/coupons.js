const express = require("express");
const router = express.Router();
const Coupon = require("../models/couponModel");

router.post("/", async (req, res) => {
  try {
    const { code } = req.body;
    console.log(req.body, "coderrrrr");
    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      return res
        .status(400)
        .json({ error: "bu kupon daha öncesinden tanımlandı." });
    }

    const newCoupon = new Coupon(req.body);
    await newCoupon.save();
    console.log(newCoupon, "newkupon");
    res.status(201).json(newCoupon);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server error. coupon oluşturma işlemi sırasında hata oluştu",
    });
  }
});

// Tüm kuponları getirme (Read - All)
router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find();

    res.status(200).json(coupons);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Server error. kupon getirme işlemi sırasında hata oluştu",
    });
  }
});


// Belirli bir kuponu getirme (Read - Single by Coupon ID)
router.get("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
  
      const coupon = await Coupon.findById(couponId);
  
      if (!coupon) {
        return res.status(404).json({ error: "Coupon not found." });
      }
  
      res.status(200).json(coupon);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  
  // Belirli bir kuponu getirme (Read - Single by Coupon Code)
  router.get("/code/:couponCode", async (req, res) => {
    try {
      const couponCode = req.params.couponCode;
  console.log(req.params.couponCode,"couponCode");
      const coupon = await Coupon.findOne({ code: couponCode });
  
      if (!coupon) {
        return res.status(404).json({ error: "Coupon not found." });
      }
      const { discountPercent } = coupon;
      res.status(200).json({ discountPercent });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  
  // Kupon güncelleme (Update)
  router.put("/:couponId", async (req, res) => {
    try {
      const couponId = req.params.couponId;
      const updates = req.body;
  
      const existingCoupon = await Coupon.findById(couponId);
  
      if (!existingCoupon) {
        return res.status(404).json({ error: "Coupon not found." });
      }
  
      const updatedCoupon = await Coupon.findByIdAndUpdate(couponId, updates, {
        new: true,
      });
  
      res.status(200).json(updatedCoupon);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error." });
    }
  });
  
  // Kupon silme (Delete)
  router.delete("/:couponId", async (req, res) => {
      try {
        const couponId = req.params.couponId;
    
        const deletedCoupon = await Coupon.findByIdAndRemove(couponId);
    
        if (!deletedCoupon) {
          return res.status(404).json({ error: "Coupon not found." });
        }
    
        res.status(200).json(deletedCoupon);
      } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error." });
      }
    });

module.exports = router;
