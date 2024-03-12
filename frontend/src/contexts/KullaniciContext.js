import React, { createContext, useState } from "react";

export const KullaniciContext = createContext();

const KullaniciProvider = ({ children }) => {
  const [kullanici, setKullanici] = useState([]);
  const API = process.env.REACT_APP_CLIENT_DOMAIN;
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
  // useEffect(() => {
 
  // }, [API]);

  return (
    <KullaniciContext.Provider value={{ kullanici, setKullanici }}>
      {children}
    </KullaniciContext.Provider>
  );
};

export default KullaniciProvider;
