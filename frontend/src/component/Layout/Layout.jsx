import Footer from "./Footer";
import Navbar from "./Navbar";

// import { LuMoon, LuSun } from "react-icons/lu";
import { useState } from "react";
const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="pb-[81px]">
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
 

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
