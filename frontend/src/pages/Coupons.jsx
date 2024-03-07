
import { Link } from "react-router-dom";

import {  FaPlus } from "react-icons/fa";

import Coupon from "./Coupon";
import Sidebar from "../component/Admin Panel Component/shared/Sidebar";

const Coupons = () => {




  return (
    <Sidebar>
      {/* ürün CRUD işlemi */}
      <div className="flex p-20 gap-x-20 items-center justify-center ">
        {/* ürün ekle */}
        <Link to={"/admin/adminaddcoupon"}>
          <div className="">
            <div className="w-[150px] h-[150px] text-[50px] bg-green-500 hover:bg-green-400 flex items-center justify-center text-white">
              <FaPlus size={100} />
            </div>

            <strong className=" my-5 flex items-center justify-center text-gray-800 text-xl ">
              Kupon ekle
            </strong>
          </div>
        </Link>
      </div>

      {/* ürün stok takip işlemi */}
      <div className="mx-28 mb-36">
        <Coupon />
      </div>
    </Sidebar>
  );
};

export default Coupons;
