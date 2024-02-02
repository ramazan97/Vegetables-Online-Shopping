import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Vegetables from "./pages/Vegetables";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/vegetables" element={<Vegetables />} />
              <Route path="/about" element={<About />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/register" element={<Register />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/user" element={<User />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
