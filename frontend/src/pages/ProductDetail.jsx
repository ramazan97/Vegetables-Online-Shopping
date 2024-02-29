import React, { useContext, useState } from "react";
// import ReactStars from "react-stars";

import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Button from "../component/Buttons/Button";
import { FaRegCircleUser } from "react-icons/fa6";
import Tabs from "./Tabs";
import Reviews from "./Reviews";
import Product from "./Product";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);

  const { addToCard } = useContext(CartContext);
  const { name, description, price, img } = products;
  const product = products.find((item) => {
    return item._id;
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading....
      </section>
    );
  }

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center justify-center ">
      <div className=" flex flex-col items-center justify-center ">
        <div className="pb-20">
          <Product />
        </div>

        <div className="flex items-center justify-start w-full ">
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
