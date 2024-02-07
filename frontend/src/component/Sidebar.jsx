import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "preline/preline";
import { IStaticMethods } from "preline/preline";
import { GiHamburgerMenu } from "react-icons/gi";
// declare global {
//   interface Window {
//     HSStaticMethods: IStaticMethods;
//   }
// }

const Sidebar = () => {
  const location = useLocation();

  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, [location.pathname]);
  return (
    <div>
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600"
        data-hs-overlay="#docs-sidebar"
        aria-controls="docs-sidebar"
        aria-label="Toggle navigation"
      >
        <GiHamburgerMenu />
      </button>

      <div
        id="docs-sidebar"
        className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="px-6">
          <div className="bg-gray-200 rounded-xl">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="./logo.png" alt="logo" />
            </a>
          </div>
        </div>
        <nav
          className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
          data-hs-accordion-always-open
        >
          <ul className="flex flex-col text-gray-200 items-start justify-center gap-5 font-medium p-6">
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
              <Link className="" to="/admin">
                admin
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
