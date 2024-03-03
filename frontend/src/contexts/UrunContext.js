import { createContext, useReducer } from "react";

export const UrunContext = createContext();

export const urunReducer = (state, action) => {
  switch (action.type) {
    case "URUN_OLUSTUR":
      return { urunler: [action.payload, ...state.urunler] };
    case "URUN_DOLDUR":
      return { urunler: action.payload };
    case "URUN_SIL":
      return { urunler: state.urunler.filter((n) => n._id !== action.payload._id) };

    default:
      return state;
  }
};

export const UrunContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(urunReducer, {  urunler: [] });
  return (
    <UrunContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UrunContext.Provider>
  );
};
