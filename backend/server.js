const express = require("express");
require("dotenv").config();
const shopCartRoute = require("./routes/shop");
const kullaniciRoute = require("./routes/kullanici");
const couponsRoute = require("./routes/coupons");
const messagesRoute = require("./routes/messages");
const paymentRoute = require("./routes/payment");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  next();
});

 app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Veritabanına Bağlandı");
    app.listen(process.env.PORT, () => {
      console.log("4000. port dinleniyor...");
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/shopcart",shopCartRoute);
app.use("/api/kullanici",kullaniciRoute);
app.use("/api/coupon",couponsRoute);
app.use("/api/messages",messagesRoute);
app.use("/api/payment", paymentRoute);


