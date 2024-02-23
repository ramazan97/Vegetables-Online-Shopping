import React, { useContext } from "react";
// import ReactStars from "react-stars";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../component/Buttons/Button";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);
  const { addToCard } = useContext(CartContext);

  
  const product = products.find((item) => {
    return item._id;
  });

  const { baslik, aciklama, ucret, resim } = product;
  console.log(product, "product");
  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center ">
      <div className="container mx-auto">
        <div className="flex gap-x-36 mx-40 max-w-[500px] flex-col lg:flex-row items-center ">
          {/* resim */}
          <div className="flex justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm " src={resim} alt="" />
          </div>
          {/* Ürün bilgisi */}
          <div className="flex-1  max-w-[450px] text-center lg:text-left ">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {baslik}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {ucret}
            </div>

            <p className="mb-8  text-wrap w-[500px]">{aciklama} </p>
            <div className=" flex items-center md:justify-center lg:justify-start">
              <Button
                onClick={() => addToCard(product, product.id)}
                name={"Buy Now"}
              />
            </div>
          </div>
          {/* kullanııc yorumları */}
        </div>

        {/* yorum kısmı */}
        <div className="overflow-y-scroll  h-[300px] mt-5 mb-32 mx-40">
          <div className=" p-5 flex items-start justify-center flex-col gap-y-3 border border-t shadow-md rounded-md ">
            {/* yıldız */}
            <div>
              {/* <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              /> */}
            </div>
            {/* isim tarih */}
            <div className="flex items-center justify-center gap-x-3">
              {/* isim */}
              <div>ramazan yaglı</div>
              <p>.</p>
              {/* tarih */}
              <div>2 oçak 2024</div>
            </div>
            {/* yorum */}
            <div>güzel ürün</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
