import React, { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState(null);
  const API = process.env.REACT_APP_CLIENT_DOMAIN;

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

  // useEffect(() => {}, []);

  return (
    <ProductContext.Provider
      value={{ products, setProducts, singleProduct, setSingleProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
