import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import { NavbarContext } from "../../contexts/NavbarContext";
import { IoCartOutline } from "react-icons/io5";
import { useAuthContext } from "../../hooks/useAuthContext";
import { HiOutlineSearch } from "react-icons/hi";
import { LuMoon, LuSun } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { Popover } from "@headlessui/react";
import { useLogout } from "../../hooks/useLogout";

const Cart = ({ toggleDarkMode, darkMode, setDarkMode }) => {
  const { navisOpen } = useContext(NavbarContext);
  const { logout } = useLogout();
  const { itemAmount } = useContext(CartContext);
  const { kullanici } = useAuthContext();
  const AdminEmail = process.env.REACT_APP_ADMIN_EMAIL;
  const handleClick = () => {
    logout();
  };
  return (
    <div
      className={`${
        navisOpen ? "left-0" : "-left-full "
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[25vw] xl:max-w-[20vw]  z-20 px-4 lg:px-[35px] dark:bg-neutral-900`}
    >
      <div className="flex flex-col items-start justify-start  my-10 gap-y-4  h-full  dark:bg-neutral-900">
        {/* logo */}
        <div className=" w-full">
          <div className="flex items-center justify-center">
            <Link
              className="flex items-center space-x-3 rtl:space-x-reverse dark:bg-gray-200 rounded-3xl p-3"
              to={"/"}
            >
              <img src="./logo.png" alt="logo" />
            </Link>
          </div>
        </div>

        {/* search işlemi */}
        <div className="hidden lg:flex   w-full  ">
          <div className="relative flex w-full">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm focus:outline-none active:outline-none border w-full rounded-lg border-gray-300  h-10 pl-11 pr-4 "
            />
          </div>
        </div>

        {/* linkler */}
        <div className=" w-full text-2xl ">
          {!kullanici && (
            <div>
              <ul className="flex flex-col items-start justify-center gap-5 font-medium p-6">
                <li className="hover:text-orange-400 transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/">
                    HOME
                  </Link>
                </li>

                <li className="hover:text-orange-400 transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/shop">
                    SHOP
                  </Link>
                </li>
                <li className="hover:text-orange-400 transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/vegetables">
                    VEGETABLES
                  </Link>
                </li>
                <li className="hover:text-orange-400 transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="hover:text-orange-400 text-nowrap transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/contactus">
                    CONTACT US
                  </Link>
                </li>
                <li className="hover:text-orange-400 transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/login">
                    LOGIN
                  </Link>
                </li>

                <li className="hover:text-orange-400 transition-all duration-500">
                  <Link className="dark:text-gray-200" to="/signup">
                    SIGNUP
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {kullanici && (
            <div className="flex flex-col items-start justify-center">
              <div>
                <ul className="flex flex-col items-start justify-center gap-5 font-medium p-6">
                  <li className="hover:text-orange-400 transition-all duration-500">
                    <Link className="dark:text-gray-200" to="/">
                      HOME
                    </Link>
                  </li>

                  <li className="hover:text-orange-400 transition-all duration-500">
                    <Link className="dark:text-gray-200" to="/shop">
                      SHOP
                    </Link>
                  </li>
                  <li className="hover:text-orange-400 transition-all duration-500">
                    <Link className="dark:text-gray-200" to="/vegetables">
                      VEGETABLES
                    </Link>
                  </li>
                  <li className="hover:text-orange-400 transition-all duration-500">
                    <Link className="dark:text-gray-200" to="/about">
                      ABOUT
                    </Link>
                  </li>
                  <li className="hover:text-orange-400 transition-all duration-500 text-nowrap ">
                    <Link className="dark:text-gray-200" to="/contactus">
                      CONTACT US
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className=" flex flex-col gap-y-5 items-start justify-center  pl-5">
            <button
              className={`${darkMode ? "text-gray-100" : "text-gray-900"}`}
              onClick={toggleDarkMode}
            >
              {darkMode ? <LuSun size={40} /> : <LuMoon size={40} />}
            </button>
            <HiOutlineSearch
              fontSize={50}
              className="text-gray-900 dark:text-gray-200 p-2  "
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />

            {kullanici && (
              <>
                <Link className="" to="/cartt">
                  <div className="flex flex-col items-start justify-center">
                    <IoCartOutline size={40} />
                    <span className="absolute ml-6 mb-6 bg-red-500 text-white rounded-full  text-[18px] font-bold w-[28px] flex justify-center items-center  h-[28px]">
                      {itemAmount}
                    </span>
                  </div>
                </Link>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <div className=" flex flex-col items-start justify-center py-5 gap-y-5">
                        {" "}
                        <div className="hover:text-orange-400 transition-all w-full duration-500 font-bold flex items-center justify-start gap-3">
                          <Link className="" to="">
                            <span>{kullanici.email}</span>
                          </Link>
                        </div>
                        <div className="hover:text-orange-400 cursor-pointer transition-all duration-500 font-bold flex items-center justify-start w-full   ">
                          {kullanici && kullanici.email === AdminEmail ? (
                            <Link className="" to="/admin">
                              <strong>Admin</strong>
                            </Link>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="hover:text-orange-400 transition-all w-full duration-500 font-bold flex items-center justify-start gap-3">
                          <CiLogout />
                          <button onClick={handleClick}>ÇIKIS</button>
                        </div>
                      </div>
                    </>
                  )}
                </Popover>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
