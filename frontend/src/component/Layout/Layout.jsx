import Footer from "./Footer";
import Navbar from "./Navbar";
import Search from "./../Modals/Search/Search";

// import { LuMoon, LuSun } from "react-icons/lu";
import { useState } from "react";
const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSearchShow, setIsSearchShow] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="pb-[81px]">
        <Navbar isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} toggleDarkMode={toggleDarkMode} darkMode={darkMode} setDarkMode={setDarkMode} />
        <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow} />
      </div>
 

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
