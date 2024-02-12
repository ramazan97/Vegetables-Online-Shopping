import React, { useContext } from "react";


import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../component/Button";

const UrunDetay = () => {

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

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center ">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm " src={resim} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left ">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {baslik}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {ucret}
            </div>

            <p className="mb-8">{aciklama} </p>
            <div className=" flex items-center justify-center">
              <Button
                onClick={() => addToCard(product, product.id)}
                name={"Buy Now"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrunDetay;
