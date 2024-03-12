import React, { useContext } from "react";
// import ReactStars from "react-stars";

import { ProductContext } from "../../contexts/ProductContext";

import Tabs from "../Tabs/Tabs";
import Product from "./Product";

const ProductDetail = () => {
  const { products } = useContext(ProductContext);


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
          <Product products={products} />
        </div>

        <div className="flex items-center justify-start w-full ">
          <Tabs products={products} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

