import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UrunContextProvider } from "./contexts/UrunContext";
import CartContext from "./contexts/CartContext";
import ProductContext from "./contexts/ProductContext";
import CouponContext from "./contexts/CouponContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import SidebarProvider from "./contexts/SidebarContext";
import KullaniciContext from "./contexts/KullaniciContext";
import NavbarContext from "./contexts/NavbarContext";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <NavbarContext>
        <AuthContextProvider>
          <CartContext>
            <ProductContext>
              <CouponContext>
                <KullaniciContext>
                  <UrunContextProvider>
                    <App />
                  </UrunContextProvider>
                </KullaniciContext>
              </CouponContext>
            </ProductContext>
          </CartContext>
        </AuthContextProvider>
      </NavbarContext>
    </SidebarProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
