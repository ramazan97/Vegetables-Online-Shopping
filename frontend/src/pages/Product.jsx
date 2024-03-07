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
    <div className="flex gap-x-36 mx-40 max-w-[500px] flex-col lg:flex-row items-center  ">
      {/* resim */}
      <div className="flex justify-center items-center mb-8 lg:mb-0 ">
        <img className="max-w-[200px] lg:max-w-sm " src={product.img[0]} alt="" />
      </div>
      {/* Ürün bilgisi */}
      <div className="flex-1  max-w-[450px] text-center lg:text-left ">
        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0 ">
          {product.name}
        </h1>
        <div className="text-xl text-red-500 font-medium mb-6">{product.price}</div>

        <p className="mb-8  text-wrap w-[500px]">{product.description} </p>
        <div className=" flex items-center md:justify-center lg:justify-start">
          <Button
            onClick={() => addToCard(product, product.id)}
            name={"Buy Now"}
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
