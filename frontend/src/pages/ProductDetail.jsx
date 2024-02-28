import React, { useContext, useState } from "react";
// import ReactStars from "react-stars";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../component/Buttons/Button";
import { FaRegCircleUser } from "react-icons/fa6";
import Tabs from "./Tabs";
import Reviews from "./Reviews";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);

  const { addToCard } = useContext(CartContext);

  const product = products.find((item) => {
    return item._id;
  });

  const { name, description, price, img } = products;

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
      <div className="container mx-auto flex flex-col items-center justify-between gap-y-10">
        <div className="flex gap-x-36 mx-40 max-w-[500px] flex-col lg:flex-row items-center pt-[600px] bg-red-500">
          {/* resim */}
          <div className="flex justify-center items-center mb-8 lg:mb-0 ">
            <img className="max-w-[200px] lg:max-w-sm " src={img} alt="" />
          </div>
          {/* Ürün bilgisi */}
          <div className="flex-1  max-w-[450px] text-center lg:text-left ">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
              {name}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>

            <p className="mb-8  text-wrap w-[500px]">{description} </p>
            <div className=" flex items-center md:justify-center lg:justify-start">
              <Button
                onClick={() => addToCard(product, product.id)}
                name={"Buy Now"}
              />
            </div>
          </div>
        </div>
        <div className="bg-yellow-500">
          <Reviews />
        </div>
        <div className="bg-green-500">
          <Tabs products={products} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

{
  /* yorum kısmı */
}
{
  /* <div className="overflow-y-scroll  h-[300px] mt-5 mb-32 mx-40">
          <div className=" p-5 flex items-start justify-center flex-col gap-y-3 border border-t shadow-md rounded-md ">
         
            <div>
               <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              /> 
            </div>

          
             <div className="flex  flex-col gap-y-5 ">
              <div className="flex  w-full items-center justify-center gap-x-3">
                <div className=" rounded-full">
                  <FaRegCircleUser size={60} />
                </div>
           
                <div className="flex items-center justify-center gap-x-3">
              
                  <div>ramazan yaglı</div>
                  <p>.</p>
                
                  <div>2 oçak 2024</div>
                </div>
              </div>
            
              <div>güzel ürün</div>
            </div> 
          </div>
        </div> */
}
