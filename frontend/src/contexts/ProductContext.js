import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const API = process.env.REACT_APP_CLIENT_DOMAIN;
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch(`${API}/api/shopcart`);

        if (!response.ok) {
          throw new Error("Verileri getirme hatası");
        }

        const data = await response.json();
        setProducts(data);
        setSingleProduct(data);
      };
      fetchProducts();
    } catch (error) {
      console.log(
        "Product cotext içerisinde ürünleri getiriken hata oluştu",
        error
      );
    }
  }, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, singleProduct, setSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
