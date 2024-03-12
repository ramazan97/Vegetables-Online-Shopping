import React, { createContext, useState, useEffect } from "react";

export const CouponContext = createContext();

const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([]);
  const API = process.env.REACT_APP_CLIENT_DOMAIN;
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch(`${API}/api/coupon`);
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
