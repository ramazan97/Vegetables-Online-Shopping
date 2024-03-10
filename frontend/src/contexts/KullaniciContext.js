import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
import { toast } from "react-toastify";
export const KullaniciContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [kullanici, setKullanici] = useState([]);
  const API = process.env.REACT_APP_CLIENT_DOMAIN;
  useEffect(() => {
    const fetchkullanici = async () => {
      try {
        const response = await fetch(`${API}/api/kullanici`);
        const data = await response.json();
        setKullanici(data);
      } catch (error) {
        console.log(
          error,
          "kullanicilari getirme işlemi sırasında hata oluştu"
        );
      }
    };
    fetchkullanici();
  }, []);

  return (
    <KullaniciContext.Provider value={{ kullanici, setKullanici }}>
      {children}
    </KullaniciContext.Provider>
  );
};

export default KullaniciProvider;
