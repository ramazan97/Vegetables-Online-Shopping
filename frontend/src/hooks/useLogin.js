
import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [hata, setHata] = useState(null);

  const [yukleniyor, setYukleniyor] = useState(null);

  const { dispatch } = useAuthContext();

  const login = async (email,password) => {
    setYukleniyor(true);
    setHata(null);

    const response = await fetch("/api/kullanici/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email,password }),
    });


    const json = await response.json();

    if (!response.ok) {
      setYukleniyor(false);
      setHata(json.hata);
   
    }

    if (response.ok) {
      localStorage.setItem("kullanici", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setYukleniyor(false);
      

    }
  };

  return { login, yukleniyor, hata };
};
export default useLogin;
