import React, { Fragment, useContext } from "react";
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import { HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import { Popover, Transition } from "@headlessui/react";
import classNames from "classnames";
import { FaCaretDown } from "react-icons/fa";
import { SidebarContext } from "../contexts/SidebarContext";

import Cart from "./Cart";
const Navbar = () => {
  const { logout } = useLogout();
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { kullanici } = useAuthContext();
  const handleClick = () => {
    logout();
  };
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
                      <span className="absolute ml-6 mb-6 bg-red-500 text-white rounded-full p-[6px] text-[10px]">
                        4
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
                    <Popover.Panel className="absolute  mr-3 flex flex-col gap-y-3 items-center justify-end right-0 z-10 mt-2.5 transform w-36">
                      <div className="hover:text-orange-400 cursor-pointer transition-all duration-500 font-bold flex items-center justify-center gap-3">
                        {kullanici && kullanici.email === "ramaz@gmail.com" ? (
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

        <div>
          <div className="relative">
            <HiOutlineSearch
              fontSize={20}
              className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
            />
            <input
              type="text"
              placeholder="Search..."
              className="text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 pl-11 pr-4 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
