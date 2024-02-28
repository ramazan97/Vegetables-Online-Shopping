import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
export const CouponContext = createContext();

const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch("http://localhost:3000/api/coupon");
        const data = await response.json();
        setCoupons(data);
      };
      fetchProducts();
    } catch (error) {
      console.log(
        "Coupon cotext içerisinde ürünleri getiriken hata oluştu",
        error
      );
    }
  });

  return (
    <CouponContext.Provider value={{ coupons, setCoupons }}>
      {children}
    </CouponContext.Provider>
  );
};

export default CouponProvider;
