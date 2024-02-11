import Navbar from "./Navbar";
import Footer from "../pages/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="pb-[81px]">
        <Navbar />
      </div>

      {children}
      <Footer />
    </div>
  );
};

export default Layout;
