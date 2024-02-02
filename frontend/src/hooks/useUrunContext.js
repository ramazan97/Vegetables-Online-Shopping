import { UrunContext } from "../contexts/UrunContext";

import { useContext } from "react";

export const useUrunContext = () => {
  const context = useContext(UrunContext);

  if (!context) {
    throw Error("context yüklenmedi");
  }

  return context;
};
