import React from "react";
import Cart from "../component/Cart";

const Shop = () => {
  return (
    <div className="flex flex-col items-center mt-16 gap-y-5">
      {/* logo */}
      <div>
        {" "}
        <img src="./img-2.png" alt="corrot" />
      </div>
      {/* title */}
      <div>
        <p className="text-4xl font-bold">Our Vegatables</p>
      </div>
      {/* descprtion */}
      <div>
        <p>Reader will be distracted by the readable content of a</p>
      </div>
      {/* cart */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 ">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
