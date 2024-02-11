import React, { useContext } from "react";
import Button from "./Button";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../contexts/CartContextProvider";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
const Card = ({ product }) => {
  const { kullanici } = useAuthContext();
  const navigate = useNavigate();
  // console.log(data,"data");
  // const { sayac, arttir, azalt } = countReducer();

  // const { urunler, artir, azalt } = useContext(CartContext);

  // const urunMiktar = urunler[data._id] ?? 0; // Başlangıçta 0 atanıyor

  const handleClick = () => {
    if (!kullanici) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };
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
          $<span className="text-yellow-500 ">{product.ucret}</span>
        </div>
        <div class="font-bold text-3xl mb-2">{product.baslik}</div>
        <div class="font-bold text-3xl mb-2">
          {product.kilogram}
          <span className="text-yellow-500">Kg</span>
        </div>
        <p class="text-gray-700 text-center ">{product.aciklama}</p>
      </div>

      {/* button */}
      <div className="flex flex-col gap-y-3.5 items-center justify-center py-7">
        <Button onClick={handleClick} name={`Buy Now`} />

        <Link to={`/cart/${product._id}`}>
          <Button name={<BsEyeFill className="text-3xl" />} />
        </Link>

        {/* <div>
          <h1>Sayac: {sayac}</h1>
          <Button onClick={arttir} name={<FaPlus />}></Button>
          <Button onClick={azalt} name={<FaMinus />}></Button>
        </div> */}
        {/* <div>
      <p>Ürün Miktarı: {urunMiktar}</p>
      <button className="bg-red-500" onClick={() => artir(data._id)}>+</button>
      <button className="bg-green-500 m-5" onClick={() => azalt(data._id)}>-</button>
    </div> */}
      </div>
    </div>
  );
};

export default Card;
