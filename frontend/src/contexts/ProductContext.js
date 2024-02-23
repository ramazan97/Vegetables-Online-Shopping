import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch("http://localhost:3000/api/shopcart");
        const data = await response.json();
        setProducts(data);
      };
      fetchProducts();
    } catch (error) {
      console.log(
        "Product cotext içerisinde ürünleri getiriken hata oluştu",
        error
      );
    }
  });

  return (
    <ProductContext.Provider value={{ products,setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
