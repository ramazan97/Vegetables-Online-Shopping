import React, { Fragment, useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineSearch } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";
import { FaCaretDown } from "react-icons/fa";
import { SidebarContext } from "../../contexts/SidebarContext";

import Cart from "../Cart/Cart";
import { CartContext } from "../../contexts/CartContext";
import { LuMoon, LuSun } from "react-icons/lu";
import { NavbarContext } from "../../contexts/NavbarContext";
import { IoCartOutline } from "react-icons/io5";
const Navbar = ({ toggleDarkMode, darkMode, setDarkMode }) => {
  const { logout } = useLogout();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { navisOpen, setNavIsOpen } = useContext(NavbarContext);
  const { kullanici } = useAuthContext();
  const { itemAmount } = useContext(CartContext);
  const handleClick = () => {
    logout();
  };

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md " : "bg-none  py-6  "
      } flex items-center justify-between px-10 h-[81px] fixed w-full z-10 transition-all dark:bg-neutral-900`}
    >
      {/* logo */}
      <div>
        <Link
          className="flex items-center space-x-3 rtl:space-x-reverse"
          to={"/"}
        >
          <img src="./logo.png" alt="logo" />
        </Link>
      </div>
      <div className="md:hidden flex items-center justify-end">
        {/* <Sidebar /> */}

        <Link className="" onClick={() => setNavIsOpen(!navisOpen)} to="">
          <div className="flex items-center justify-center">
            <GiHamburgerMenu size={25} />
            <Sidebar
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          </div>
        </Link>
      </div>

      {/* search işlemi */}
      <div className="hidden lg:flex flex-auto mx-5  bg-red-500">
        <div className="relative flex w-full">
          <HiOutlineSearch
            fontSize={20}
            className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search..."
            className="text-sm focus:outline-none active:outline-none border w-full  border-gray-300  h-10 pl-11 pr-4 rounded-sm"
          />
        </div>
      </div>
      {/* linkler */}
      <div>
        {" "}
        {!kullanici && (
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
              <li className="hover:text-orange-400 text-nowrap transition-all duration-500">
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
            </ul>
          </div>
        )}
        {kullanici && (
          <div className="flex items-center justify-center">
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
                <li className="hover:text-orange-400 transition-all duration-500 text-nowrap ">
                  <Link className="" to="/contactus">
                    CONTACT US
                  </Link>
                </li>
                <li className="hover:text-orange-400 transition-all duration-500  ">
                  <Link className="" onClick={() => setIsOpen(!isOpen)} to="">
                    <div className="flex items-center justify-center">
                      <IoCartOutline size={25} />
                      <span className="absolute ml-6 mb-6 bg-red-500 text-white rounded-full p-[6px] text-[12px] w-[18px] flex justify-center items-center  h-[18px]">
                        {itemAmount}
                      </span>
                    </div>
                    <Cart />
                  </Link>
                </li>
              </ul>
            </div>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open && "bg-gray-100",
                      "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 font-bold justify-center gap-2  mr-2"
                    )}
                  >
                    <div className="hover:text-orange-400 transition-all duration-500 flex items-center justify-center ">
                      <span>{kullanici.email}</span>
                      <FaCaretDown />
                    </div>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute  mr-3 flex flex-col gap-y-3 items-center justify-end right-0 z-10 mt-2.5 transform w-36 bg-white">
                      <div className="hover:text-orange-400 cursor-pointer transition-all duration-500 font-bold flex items-center justify-center gap-3">
                        {kullanici && kullanici.email === "admin1@gmail.com" ? (
                          <Link className="" to="/admin">
                            <strong>Admin</strong>
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="hover:text-orange-400 transition-all duration-500 font-bold flex items-center justify-center gap-3">
                        <button onClick={handleClick}>ÇIKIS</button>
                        <CiLogout />
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
        )}
      </div>
      {/* dark mode button */}
      <div>
        <button
          className={`${darkMode ? "text-gray-100" : "text-gray-900"}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <LuSun size={25} /> : <LuMoon size={25} />}
        </button>
      </div>

      <div className="hidden md:flex items-center justify-center gap-5"></div>
    </header>
  );
};

export default Navbar;
