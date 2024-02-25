import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Layout/Navbar";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Customers from "./component/Customers/Customers";
import Messages from "./component/Messages/Messages";
import Cart from "./component/Cart/Cart";
import Cartt from "./component/Cart/Cartt";
import ProductDetail from "./pages/ProductDetail";
function App() {
  const { kullanici } = useAuthContext();
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
                <Route path="/adminproducts" element={<AddDeleteProduct />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/cartt" element={<Cartt />} />

                <Route path="/admindeleteproduct" element={<DeleteProduct />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/adminaddproduct" element={<AddProduct />} />

                <Route path="/admin/*">
                  <Route
                    path="adminupdateproduct/:id"
                    element={<UpdateProduct />}
                  />
                </Route>

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
                  element={!kullanici ? <Signup /> : <Navigate to="/login" />}
                />
                {/* <Route path="/admin" element={<Admin />} /> */}

                <Route
                  path="/admin"
                  element={
                    kullanici && kullanici.email === "admin1@gmail.com" ? (
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
