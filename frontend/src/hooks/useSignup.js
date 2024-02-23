import { useState } from "react";

import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [hata, setHata] = useState(null);
  const [yukleniyor, setYukleniyor] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (username, email, password) => {
    setYukleniyor(true);
    setHata(null);

    try {
      const response = await fetch("/api/kullanici/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        setYukleniyor(false);
        setHata(response.data.hata); // Assuming error message is in response.data.hata
      } else {
        localStorage.setItem("kullanici", JSON.stringify(response.data));
        dispatch({ type: "LOGIN", payload: response.data });
        setYukleniyor(false);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setYukleniyor(false);
      setHata("Bir hata oluştu, lütfen tekrar deneyin."); // User-friendly error message
    }
  };

  return { signup, yukleniyor, hata };
};

export default useSignup;
