import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Vegetables from "./pages/Vegetables";
import About from "./pages/About";
import Contactus from "./pages/Contactus";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

import Signup from "./pages/Signup";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./component/Admin Panel Component/pages/Dashboard";
import Products from "./component/Admin Panel Component/pages/Products";
import Layout from "./component/Layout/Layout";
import AddDeleteProduct from "./component/Products/AddDeleteProduct";
import DeleteProduct from "./component/Products/DeleteProduct";
import AddProduct from "./component/Products/AddProduct";
import UpdateProduct from "./component/Products/UpdateProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./component/Customers/Customers";
import Messages from "./component/Messages/Messages";

import Cartt from "./component/Cart/Cartt";
import ProductDetail from "./component/Products/ProductDetail";
import Coupons from "./component/Coupon/Coupons";
import AddCoupon from "./component/Coupon/AddCoupon";
import UpdateCoupon from "./component/Coupon/UpdateCoupon";
import Success from "./component/Success/Success";
import Orders from "./component/Order/Orders";
import Settings from "./component/Settings/Settings";
import { useContext } from "react";
import { KullaniciContext } from "./contexts/KullaniciContext";
import { isAdmin } from "./config/isAdmin";

function App() {
  const { kullanici } = useAuthContext();
  const kullanicilar = useContext(KullaniciContext);
  const girisYapanKullanici = JSON.parse(localStorage.getItem("kullanici"));

  const selectKullanici = Array.isArray(kullanicilar.kullanici)
    ? kullanicilar.kullanici.find(
        (kllnc) => kllnc?.email === girisYapanKullanici?.email
      )
    : kullanicilar.kullanici;

  return (
    <div>
      <ToastContainer />
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
                <Route path="/cart/:id" element={<ProductDetail />} />
                <Route path="/shop" element={<Shop />} />

                <Route path="/cartt" element={<Cartt />} />
                <Route path="/success" element={<Success />} />
                {/* <Route path="/admindeleteproduct" element={<DeleteProduct />} />
                <Route path="/messages" element={<Messages />} /> */}
                {/* <Route path="/adminaddproduct" element={<AddProduct />} />
                <Route path="/adminaddcoupon" element={<AddCoupon />} />
                <Route path="/admincoupon" element={<Coupons />} /> */}
                {/* <Route path="/customers" element={<Customers />} /> */}
                {/* <Route path="/adminproducts" element={<AddDeleteProduct />} /> */}

                <Route path="/admin/*">
                  <Route
                    path="adminupdateproduct/:id"
                    element={<UpdateProduct />}
                  />
                  <Route
                    path="adminupdatecoupon/:id"
                    element={<UpdateCoupon />}
                  />
                  <Route path="adminaddproduct" element={<AddProduct />} />
                  <Route path="adminaddcoupon" element={<AddCoupon />} />
                  <Route path="admincoupon" element={<Coupons />} />
                  <Route path="adminorders" element={<Orders />} />
                  <Route
                    path="admindeleteproduct"
                    element={<DeleteProduct />}
                  />
                  <Route path="messages" element={<Messages />} />
                  <Route path="customers" element={<Customers />} />
                  <Route path="adminsettings" element={<Settings />} />
                  <Route path="adminproducts" element={<AddDeleteProduct />} />
                </Route>

                <Route path="/vegetables" element={<Vegetables />} />
                <Route path="/about" element={<About />} />
                <Route path="/contactus" element={<Contactus />} />
                {/* buradaki Navigate komutu ile sonradan istediğimiz alana yönlendirme işlemi yapacağız. burasını sonradan istediğimiz gibi ayarlayacaz */}

                {/* <Route
                  path="/login"
                  element={
                    !kullanici ? (
                      <Login />
                    ) : selectKullanici?.status === "Onaylandı" ? (
                      <Navigate to="/" />
                    ) : (
                      <div>
                        {toast.error("Girişiniz Admin tarafından reddildi")}
                        <Navigate to={logout()} />
                      </div>
                    )
                  }
                /> */}
                <Route
                  path="/admin"
                  element={
                    selectKullanici &&
                    "/" + selectKullanici.role === isAdmin ? (
                      <Admin />
                    ) : (
                      <Home />
                    )
                  }
                >
                  <Route
                    index
                    element={
                      selectKullanici ? <Dashboard /> : <Navigate to="/admin" />
                    }
                  />
                  <Route
                    path="products"
                    element={
                      selectKullanici ? <Products /> : <Navigate to="/admin" />
                    }
                  />
                </Route>
                <Route
                  path="/login"
                  element={!kullanici ? <Login /> : <Navigate to="/" />}
                />
                <Route
                  path="/signup"
                  element={!kullanici ? <Signup /> : <Navigate to="/login" />}
                />
                {/* <Route path="/admin" element={<Admin />} /> */}
              </Routes>
            </Layout>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
