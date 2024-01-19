import React from "react";
import Button from "./Button";

const Cart = () => {
  return (
    <div class="w-[250px] rounded overflow-hidden shadow-lg shadow-black">
      <div class="px-6 py-4 flex items-center flex-col">
        <img
          class="w-[6rem] "
          className="py-3"
          src="./img-4.png"
          alt="tometo"
        />
        <div class="font-bold text-3xl mb-2 ">
          $<span className="text-yellow-500 ">10</span>
        </div>
        <div class="font-bold text-3xl mb-2">Tomato</div>
        <div class="font-bold text-3xl mb-2">
          1<span className="text-yellow-500">Kg</span>
        </div>
        <p class="text-gray-700 text-center ">
          adipiscing elit, sed do eiusmod tempor
        </p>
      </div>

      {/* button */}
      <div className="flex items-center justify-center py-7">
        <Button name={`Buy Now`} />
      </div>
    </div>
  );
};

export default Cart;
