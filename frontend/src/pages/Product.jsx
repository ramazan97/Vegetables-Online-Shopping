import React, { useContext } from "react";
import Button from "../component/Buttons/Button";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";

const Product = () => {
  const { products } = useContext(ProductContext);

  const { addToCard } = useContext(CartContext);
  const { name, description, price, img } = products;
  const product = products.find((item) => {
    return item._id;
  });
  // console.log(product,"product");
  return (
    <div className="flex gap-x-16  max-w-[700px] flex-col lg:flex-row items-center  bg-red-500 ">
      {/* resim */}
      <div className="flex flex-col px-5 bg-green-500 justify-center items-center mb-8 lg:mb-0 ">
        <div className="my-10 flex items-center justify-center">
          <img
            className="max-w-[200px] lg:max-w-sm "
            src={product.img[0]}
            alt=""
          />
        </div>

        <div className="bg-yellow-500 flex flex-row gap-3 w-full">
          <img className="w-[100px]  " src={product.img[0]} alt="" />
          <img className="w-[100px]  " src={product.img[1]} alt="" />
          <img className="w-[100px]  " src={product.img[2]} alt="" />
        </div>
      </div>
      {/* Ürün bilgisi */}
      <div className="px-5">
        <div className="flex flex-col  w-full text-center  bg-purple-500">
          <h1 className="text-[26px] font-medium mb-2  mx-auto lg:mx-0 ">
            {product.name}
          </h1>
          <div className="text-xl text-red-500 font-medium mb-6">
            {product.price}
          </div>

          <p className="mb-8  text-wrap ">{product.description} </p>
          <div className=" flex items-center md:justify-center lg:justify-start">
            <Button
              onClick={() => addToCard(product, product.id)}
              name={"Buy Now"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
