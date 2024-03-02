import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import CarttItem from "./CarttItem";
import Button from "../Buttons/Button";
import { toast } from "react-toastify";
const Cartt = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const [couponCode, setCouponCode] = useState("");
  const {
    cart,
    clearCart,
    total,
    itemAmount,
    fastCargoChecked,
    setFastCargoChecked,
    setCart
  } = useContext(CartContext);
  console.log(cart,"cart");
  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return toast.warning("Boş değer girilimez.");
    }

    try {
      const res = await fetch(`/api/coupon/code/${couponCode}`);

      if (!res.ok) {
        return toast.warning("Girdiğiniz kupon kodu yanlış!");
      }
      const data = await res.json();
      const discountPercent = data.discountPercent;

     const updatedCartItems = cart.map((item) => {
       const updatePrice = item.price * (1 - discountPercent / 100);
       return { ...item, price: updatePrice };
     });
     setCart(updatedCartItems);
      toast.success(`${couponCode} kupon kodu başarıyla uygulandı.`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="px-20 my-20 "
      // className="w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] translate-all duration-300 z-20 px-4 lg:px-[35px] "
    >
      <div className="flex items-center justify-center py-6 border-b">
        {/* <div className="uppercase text-sm font-semibold">
          Shopping Bag ({itemAmount})
        </div> */}

        {/* <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl xl:text-3xl" />
        </div> */}
      </div>

      <div className="flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-x-hidden border-b overflow-auto ">
        {cart.map((item) => {
          return <CarttItem item={item} key={item.id} />;
        })}
      </div>
      {/* Sidebar bottom */}
      <div className="flex items-center justify-center gap-x-3 border-b border-t">
        <div className="flex items-center justify-center gap-x-5  py-3 w-1/2 h-16">
          <input
            type="text"
            className="h-14 border w-2/3"
            placeholder="Kupon girin..."
            onChange={(e) => setCouponCode(e.target.value)}
            value={couponCode}
          />
          <div className="w-1/3">
            <Button onClick={applyCoupon} name={"Uygula"} />
          </div>
        </div>
        <div className=" border-l  py-3 h-16 w-1/2 ">
          <label className="flex pl-3 items-center ">
            <input
              className="mr-4 w-5 h-5"
              type="checkbox"
              id="fast-cargo"
              checked={fastCargoChecked}
              onChange={() => setFastCargoChecked(!fastCargoChecked)}
            />
            <p className="text-xl"> Fast Cargo:{"  "} $15.00</p>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase  font-semibold">
            <span className="mr-2">Total:</span>$ {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium "
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-4 justify-center items-center text-gray-200 w-full font-medium "
        >
          Chechout
        </Link>
      </div>
      <div> toggle bar</div>
    </div>
  );
};

export default Cartt;
