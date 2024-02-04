import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 h-[81px] ">
      <div>
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./logo.png" alt="logo" />
        </a>
      </div>
      <div className="md:hidden flex items-center justify-end">
        <Sidebar />
      </div>

      <div className="hidden md:flex items-center justify-center gap-5">
        <div>
          <ul className="flex items-center justify-center gap-5 font-medium p-6">
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/">
                HOME
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/shop">
                SHOP
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/vegetables">
                VEGETABLES
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/contactus">
                CONTACT US
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/signup">
                SIGNUP
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/register">
                REGISTER
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/admin">
                admin
              </Link>
            </li>
            <li className="hover:text-orange-400 transition-all duration-500">
              <Link className="" to="/user">
                user
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center justify-end w-[200px]  h-[81px] ">
            <input className="border  rounded-l-md h-[41px]" />
            <button>
              <IoSearchSharp
                size={25}
                className="bg-gray-300 rounded-r-md h-[41px]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
