import React, { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

const CarttItem = ({ item }) => {
  const { removeFromCart, decriseAmount, increaseAmount } =
    useContext(CartContext);
  const { ucret, baslik, aciklama, _id, amount, resim } = item;
  const id = _id;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500  ">
      <div className="w-full min-h-[150px] flex items-center justify-between ">
        {/* image */}
        <Link to={`/product/${id} `}>
          <img className="max-w-[80px]" src={resim} alt="" />
        </Link>
        <div className="flex justify-between mb-2">
          {/* baslik  */}
          <Link
            to={`/product/${id}`}
            className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline "
          >
            {baslik}
          </Link>
        </div>
        {/* arttırma azaltma kısmı */}
        <div className="flex flex-1 max-w-[100px]  items-center justify-center border text-primary font-medium ">
          <div
            onClick={() => decriseAmount(id)}
            className="flex-1 flex justify-center items-center cursor-pointer"
          >
            <IoMdRemove />
          </div>
          <div className="h-full flex justify-center items-center px-2">
            {amount}{" "}
          </div>
          <div
            onClick={() => increaseAmount(id)}
            className="flex-1 h-full flex justify-center items-center cursor-pointer"
          >
            <IoMdAdd />
          </div>
        </div>
        {/* ücret kısmı */}
        <div className=" flex items-center justify-around">$ {ucret}</div>
        {/* toplam üçret */}
        <div className=" flex justify-end items-center text-primary font-medium ">
          {`$ ${parseFloat(ucret * amount).toFixed(2)}`}
        </div>
        {/* silme butonu */}
        <div
          onClick={() => removeFromCart(id)}
          className="text-xl cursor-pointer"
        >
          <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
        </div>
      </div>
    </div>
  );
};

export default CarttItem;
