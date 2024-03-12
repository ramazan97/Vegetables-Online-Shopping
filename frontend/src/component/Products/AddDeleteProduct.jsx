import React from "react";
import { Link } from "react-router-dom";

import { FaPlus } from "react-icons/fa";

import ProductStock from "./ProductStock";
import Sidebar from "../Admin Panel Component/shared/Sidebar";
const AddDeleteProduct = () => {
  return (
    <div>
      <Sidebar>
        <div className="flex p-20 gap-x-20 items-center justify-center ">
          <Link to={"/admin/adminaddproduct"}>
            <div className="">
              <div className="w-[150px] h-[150px] text-[50px] bg-green-500 hover:bg-green-400 flex items-center justify-center text-white">
                <FaPlus size={100} />
              </div>

              <strong className=" my-5 flex items-center justify-center text-gray-800 text-xl ">
                Ürün ekle
              </strong>
            </div>
          </Link>
        </div>
        <div className="mx-28 mb-36">
          <ProductStock />
        </div>
      </Sidebar>
    </div>
  );
};

export default AddDeleteProduct;
