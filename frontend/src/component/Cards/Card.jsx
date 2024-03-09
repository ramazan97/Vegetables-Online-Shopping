import React, { useContext } from "react";
import Button from "../Buttons/Button";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
const Card = ({ product }) => {
  const { kullanici } = useAuthContext();
  const navigate = useNavigate();

  // const { sayac, arttir, azalt } = countReducer();
  const { img, price, name, description, _id, kilogram } = product;
  const { addToCard } = useContext(CartContext);

  // const urunMiktar = urunler[data._id] ?? 0; // Başlangıçta 0 atanıyor

  const handleClick = (product, id) => {
    if (!kullanici) {
      navigate("/login");
    }
    addToCard(product, id);
  };
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className=" flex items-center justify-center ">
        <img
          className="p-8  h-[300px] w-full rounded-t-lg"
          src={img[0] || img}
          alt="product image"
        />
      </div>
      <div className="px-5 pb-5">
        <>
          <h5 className="text-2xl font-semibold tracking-tight text-center text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {description}
          </h5>
        </>

        <div className="flex flex-col mt-5 items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${price}
          </span>

          <div className="flex flex-col gap-y-3.5 items-center justify-center py-7">
            {kilogram < 3 ? (
              <div className="bg-red-500 ">
                <Button name={`Ürün Stokda Kalmadı`} />
              </div>
            ) : (
              <div className="bg-green-500">
                <Button
                  onClick={() => handleClick(product, _id)}
                  name={`Buy Now`}
                />
              </div>
            )}

            <Link to={`/cart/${_id}`}>
              <Button name={<BsEyeFill className="text-3xl" />} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
