const express = require("express");
require("dotenv").config();
const shopCartRoute = require("./routes/shop");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
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

app.use("/api/shopcart", shopCartRoute);
