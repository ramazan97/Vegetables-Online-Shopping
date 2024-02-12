import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import UrunDetay from "./pages/UrunDetay";
import Vegetables from "./pages/Vegetables";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Footer from "./pages/Footer";
import Admin from "./pages/Admin";

import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./component/Admin Panel Component/pages/Dashboard";
import Products from "./component/Admin Panel Component/pages/Products";
import Layout from "./component/Layout";
import UrunEkleSil from "./component/UrunEkleSil";
import UrunSil from "./component/UrunSil";
import UrunEkle from "./component/UrunEkle";
import UrunGuncelle from "./component/UrunGuncelle";

function App() {
  const { kullanici } = useAuthContext();
  return (
    <div>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Layout>
              <Routes>
                {/* <Route
                  path="/"
                  element={kullanici ? <Home /> : <Navigate to="/login" />}
                /> */}
                <Route path="/" element={<Home />} />
                <Route path="/cart/:id" element={<UrunDetay />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/adminproducts" element={<UrunEkleSil />} />
                <Route path="/adminurunsil" element={<UrunSil />} />
                <Route path="/adminurunekle" element={<UrunEkle />} />
                <Route path="/adminurunguncelle" element={<UrunGuncelle />} />
                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<Contactus />} />
                {/* buradaki Navigate komutu ile sonradan istediğimiz alana yönlendirme işlemi yapacağız. burasını sonradan istediğimiz gibi ayarlayacaz */}
                <Route
                  path="/login"
                  element={!kullanici ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!kullanici ? <Signup /> : <Navigate to="/" />}
                />
                {/* <Route path="/admin" element={<Admin />} /> */}

                <Route
                  path="/admin"
                  element={
                    kullanici && kullanici.email === "ramaz@gmail.com" ? (
                      <Admin />
                    ) : (
                      <Home />
                    )
                  }
                >
                  <Route
                    index
                    element={
                      kullanici ? <Dashboard /> : <Navigate to="/admin" />
                    }
                  />
                  <Route
                    path="products"
                    element={
                      kullanici ? <Products /> : <Navigate to="/admin" />
                    }
                  />
                </Route>
              </Routes>
            </Layout>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
