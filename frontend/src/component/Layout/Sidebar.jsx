import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../../contexts/SidebarContext";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "../Cart/CartItem";
import { NavbarContext } from "../../contexts/NavbarContext";
import { IoCartOutline } from "react-icons/io5";
import { useAuthContext } from "../../hooks/useAuthContext";
import { HiOutlineSearch } from "react-icons/hi";
import { LuMoon, LuSun } from "react-icons/lu";

const Cart = ({ toggleDarkMode, darkMode, setDarkMode }) => {
  const { navisOpen, setNavIsOpen, navhandleClose } = useContext(NavbarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);
  const { kullanici } = useAuthContext();
  return (
    <div
      className={`${
        navisOpen ? "left-0" : "-left-full "
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[25vw] xl:max-w-[20vw]  z-20 px-4 lg:px-[35px] `}
    >
      <div className="flex flex-col items-start justify-start  my-10 gap-y-4  h-full  dark:bg-neutral-900">
        {/* logo */}
        <div className=" w-full">
          <div className="flex items-center justify-center">
            <Link
              className="flex items-center space-x-3 rtl:space-x-reverse"
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
        <div className="  w-full">
          {!kullanici && (
            <ul className="flex flex-col items-start text-black justify-center gap-5 md:text-xl text-md ">
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/">
                  HOME
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/shop">
                  SHOP
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/vegetables">
                  VEGETABLES
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/contactus">
                  CONTACT US
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/login">
                  LOGIN
                </Link>
              </li>
            </ul>
          )}
          {kullanici && (
            <ul className="flex flex-col items-start text-black justify-center gap-5 md:text-xl text-md ">
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/">
                  HOME
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/shop">
                  SHOP
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/vegetables">
                  VEGETABLES
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
                <Link className="" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500 text-nowrap ">
                <Link className="" to="/contactus">
                  CONTACT US
                </Link>
              </li>
              <li className="hover:text-orange-400 cursor-pointer transition-all duration-500  ">
                <Link className="" to="/cartt">
                  <div className="flex items-center justify-center">
                    <IoCartOutline size={25} />
                    <span className="absolute ml-6 mb-6 bg-red-500 text-white rounded-full p-[6px] text-[12px] w-[18px] flex justify-center items-center  h-[18px]">
                      {itemAmount}
                    </span>
                  </div>
                  {/* <Cart /> */}
                </Link>
              </li>
            </ul>
          )}
          {/* dark mode button */}
          <div className=" pt-5">
            <button
              className={`${darkMode ? "text-gray-100" : "text-gray-900"}`}
              onClick={toggleDarkMode}
            >
              {darkMode ? <LuSun size={25} /> : <LuMoon size={25} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// import { useContext, useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// import "preline/preline";
// import { IStaticMethods } from "preline/preline";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useLogout } from "../hooks/useLogout";
// import { SidebarContext } from "../contexts/SidebarContext";
// import { CartContext } from "../contexts/CartContext";
// import { IoCartOutline } from "react-icons/io5";
// // declare global {
// //   interface Window {
// //     HSStaticMethods: IStaticMethods;
// //   }
// // }

// const Sidebar = () => {
//   const location = useLocation();
//   const { kullanici } = useAuthContext();
//   useEffect(() => {
//     window.HSStaticMethods.autoInit();
//   }, [location.pathname]);

//   const { logout } = useLogout();
//   const { isOpen, setIsOpen } = useContext(SidebarContext);
//   const { itemAmount } = useContext(CartContext);
//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <div>
//       <button
//         type="button"
//         className="text-gray-500 hover:text-gray-600"
//         data-hs-overlay="#docs-sidebar"
//         aria-controls="docs-sidebar"
//         aria-label="Toggle navigation"
//       >
//         <GiHamburgerMenu />
//       </button>

//       <div
//         id="docs-sidebar"
//         className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[100] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
//       >
//          <div class="px-6">
//            <div className="bg-gray-200 rounded-xl">
//              <a
//                href="/"
//                className="flex items-center space-x-3 rtl:space-x-reverse"
//              >
//                <img src="./logo.png" alt="logo" />
//              </a>
//            </div>
//          </div>
//          <nav
//            className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
//            data-hs-accordion-always-open
//          >
//            {!kullanici && (
//              <ul className="flex flex-col text-gray-200 items-start justify-center gap-5 font-medium p-6">
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/">
//                    HOME
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/shop">
//                    SHOP
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/vegetables">
//                    VEGETABLES
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/about">
//                    ABOUT
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/contactus">
//                    CONTACT US
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/login">
//                    LOGIN
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/admin">
//                    admin
//                  </Link>
//                </li>
//              </ul>
//            )}
//            {kullanici && (
//              <ul className="flex flex-col items-start justify-center gap-5 font-medium p-6">
//                <li className="hover:text-orange-400 cursor-pointer transition-all duration-500">
//                  <Link className="" to="/">
//                    HOME
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/shop">
//                    SHOP
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/vegetables">
//                    VEGETABLES
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500">
//                  <Link className="" to="/about">
//                    ABOUT
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500 text-nowrap ">
//                  <Link className="" to="/contactus">
//                    CONTACT US
//                  </Link>
//                </li>
//                <li className="hover:text-orange-400 transition-all duration-500  ">
//                  <Link className="" onClick={() => setIsOpen(!isOpen)} to="">
//                    <div className="flex items-center justify-center">
//                      <IoCartOutline size={25} />
//                      <span className="absolute ml-6 mb-6 bg-red-500 text-white rounded-full p-[6px] text-[12px] w-[18px] flex justify-center items-center  h-[18px]">
//                       {itemAmount}
//                     </span>
//                   </div>
//                   {/* <Cart /> */}
//                 </Link>
//               </li>
//             </ul>
//           )}
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
