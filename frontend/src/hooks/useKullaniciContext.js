import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
export const useKullaniciContext = () => {
  const context = useContext(AuthContext);
  console.log(context, "context");
  if (!context) {
    throw Error("context yüklenmedi");
  }
  return context;
};
