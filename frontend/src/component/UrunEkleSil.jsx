import React from "react";
import { Link } from "react-router-dom";
import UrunEkle from "./UrunEkle";
import UrunSil from "./UrunSil";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import UrunStock from "./UrunStock";
const UrunEkleSil = () => {
  return (
    <div>
      {/* ürün CRUD işlemi */}
      <div className="flex p-20 gap-x-20 items-center justify-center ">
        {/* ürün ekle */}
        <Link to={"/adminurunekle"}>
          <div className="">
            <div className="w-[150px] h-[150px] text-[50px] bg-green-500 hover:bg-green-400 flex items-center justify-center text-white">
              <FaPlus size={100} />
            </div>

            <strong className=" my-5 flex items-center justify-center text-gray-800 text-xl ">
              Ürün ekle
            </strong>
          </div>
        </Link>

        {/* ürün sil */}
        <Link to={"/adminurunsil"}>
          <div>
            <div className="w-[150px] h-[150px] text-[50px] bg-green-500 hover:bg-green-400 flex items-center justify-center text-white">
              <FaMinus size={100} />
            </div>
            <strong className=" my-5 flex items-center justify-center text-gray-800 text-xl ">
              Ürün sil
            </strong>
          </div>
        </Link>

        {/* ürün güncelle */}

        <Link to={"/adminurunguncelle"}>
          <div>
            <div className="w-[150px] h-[150px] text-[50px] bg-green-500 hover:bg-green-400 flex items-center justify-center text-white">
              <GrUpdate size={100} />
            </div>
            <strong className=" my-5 flex items-center justify-center text-gray-800 text-xl ">
              Ürün güncelle
            </strong>
          </div>
        </Link>
      </div>

      {/* ürün stok takip işlemi */}
      <div className="mx-28 mb-36">
        <UrunStock />
      </div>
    </div>
  );
};

export default UrunEkleSil;
