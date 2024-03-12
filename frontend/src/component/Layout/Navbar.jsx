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

import { CiUser } from "react-icons/ci";

import { CartContext } from "../../contexts/CartContext";
import { LuMoon, LuSun } from "react-icons/lu";
import { NavbarContext } from "../../contexts/NavbarContext";
import { IoCartOutline } from "react-icons/io5";
import Logo from "../Logo/Logo";
const Navbar = ({ toggleDarkMode, darkMode, setDarkMode, setIsSearchShow }) => {
  const { logout } = useLogout();

  const { navisOpen, setNavIsOpen } = useContext(NavbarContext);
  const { kullanici } = useAuthContext();
  const { itemAmount } = useContext(CartContext);
  const AdminEmail = process.env.REACT_APP_ADMIN_EMAIL;
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
      <div className="flex flex-row">
        <div className="md:hidden flex items-center justify-end">
          <Link className="" onClick={() => setNavIsOpen(!navisOpen)} to="">
            <div className="flex items-center justify-center dark:text-gray-200">
              <GiHamburgerMenu size={40} />
              <Sidebar
                toggleDarkMode={toggleDarkMode}
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />
            </div>
          </Link>
        </div>{" "}
        <div className=" px-8 py-5 dark:bg-gray-200 rounded-3xl">
          <Link
            className="hidden md:flex md:items-center  md:scale-150"
            to={"/"}
          >
            <Logo />
          </Link>
        </div>
      </div>

      <div className=" w-full text-2xl">
        {!kullanici && (
          <div>
            <ul className="flex items-center justify-center gap-5 font-medium p-6">
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
          <div className="flex items-center justify-center">
            <div>
              <ul className="flex items-center justify-center gap-5 font-medium p-6">
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
      </div>
      <div className=" flex items-center justify-center gap-x-3">
        <button
          className={`${
            darkMode ? "text-gray-100" : "text-gray-900 dark:text-gray-200"
          }`}
          onClick={toggleDarkMode}
        >
          {darkMode ? <LuSun size={40} /> : <LuMoon size={40} />}
        </button>
        <HiOutlineSearch
          fontSize={50}
          className="text-gray-900 dark:text-gray-200 p-2  "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        />

        {kullanici && (
          <>
            <Link className="" to="/cartt">
              <div className="flex dark:text-gray-200 items-center justify-center">
                <IoCartOutline size={40} />
                <span className="absolute ml-6 mb-6 bg-red-500 text-white rounded-full  text-[18px] font-bold w-[28px] flex justify-center items-center dark:text-gray-200  h-[28px]">
                  {itemAmount}
                </span>
              </div>
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open && "bg-gray-100",
                      "group inline-flex items-center rounded-sm p-1.5  hover:text-opacity-100 focus:outline-none active:bg-gray-100 font-bold justify-center gap-2 dark:text-gray-200 mr-2 dark:bg-gray-900 text-gray-900"
                    )}
                  >
                    <div className="hover:text-orange-400  flex items-center justify-center ">
                      <CiUser className="" size={40} />

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
                    <Popover.Panel className="absolute text-lg bg-gray-100 pr-3 flex flex-col gap-y-2  py-3 text-end items-center justify-end right-0 z-10 mt-2.5 dark:bg-gray-900 transform w-48 ">
                      <div className="hover:text-orange-400 transition-all w-full duration-500 font-bold flex items-center justify-end gap-3">
                        <Link className="dark:text-gray-200" to="">
                          <span>{kullanici.email}</span>
                        </Link>
                      </div>
                      <div className="hover:text-orange-400 cursor-pointer transition-all duration-500 font-bold flex items-center justify-end w-full   ">
                        {kullanici && kullanici.email === AdminEmail ? (
                          <Link className="dark:text-gray-200" to="/admin">
                            <strong>Admin</strong>
                          </Link>
                        ) : (
                          <></>
                        )}
                      </div>
                      <div className="hover:text-orange-400 transition-all w-full duration-500 font-bold flex items-center justify-end gap-3">
                        <CiLogout />
                        <button
                          className="dark:text-gray-200"
                          onClick={handleClick}
                        >
                          ÇIKIS
                        </button>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </>
        )}
      </div>
      <div className="hidden  md:flex items-center justify-center gap-5"></div>
    </header>
  );
};

export default Navbar;
