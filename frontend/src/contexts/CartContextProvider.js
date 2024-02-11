// import React, { createContext, useReducer, useState } from "react";

// export const CartContext = createContext();

// const initialState = {
//   urunler: {},
// };

// export const cartReducer = (state, action) => {
  
//   switch (action.type) {
//     case "ARTTIR": {
//       const urunId = action.payload;
//       let urunMiktar;
//       if (state.urunler[urunId]) {
//         urunMiktar = state.urunler[urunId] + 1;
//       } else {
//         urunMiktar = 1;
//       }

//       return {
//         ...state,
//         urunler: {
//           ...state.urunler,
//           [urunId]: urunMiktar,
//         },
//       };
//     }
//     case "AZALT": {
//       const urunId = action.payload;
//       let urunMiktar;
//       if (state.urunler[urunId]) {
//         urunMiktar = state.urunler[urunId] - 1;
//       } else {
//         urunMiktar = 1;
//       }

//       console.log(urunId, "urunId");
//       console.log(urunMiktar, "urunMiktar");
//       console.log(state.urunler, "urunler");
//       return {
//         ...state,
//         urunler: {
//           ...state.urunler,
//           [urunId]: urunMiktar,
//         },
//       };
//     }
//     case "SEPETE_EKLE": {
//       const urunId = action.payload;
//       let urunMiktar;
//       if (state.urunler[urunId]) {
//         urunMiktar = state.urunler[urunId] - 1;
//       } else {
//         urunMiktar = 1;
//       }

//       return {
//         ...state,
//         urunler: {
//           ...state.urunler,
//           [urunId]: urunMiktar,
//         },
//       };
//     }
//     case "SEPETTEN_CIKAR": {
//       const urunId = action.payload;
//       let urunMiktar;
//       if (state.urunler[urunId]) {
//         urunMiktar = state.urunler[urunId] - 1;
//       } else {
//         urunMiktar = 1;
//       }

//       return {
//         ...state,
//         urunler: {
//           ...state.urunler,
//           [urunId]: urunMiktar,
//         },
//       };
//     }

//     default:
//       return state;
//   }
// };

// export const CartContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);
//   const [productCartQty, setProductCartQty] = useState(0);

//   const artir = (urunId) => {
//     dispatch({ type: "ARTTIR", payload: urunId });
//   };

//   const azalt = (urunId) => {
//     dispatch({ type: "AZALT", payload: urunId });
//   };

//   const sepeteEkle = (urunId) => {
//     dispatch({ type: "SEPETE_EKLE", payload: urunId });
//   };
//   const sepettenSil = (urunId) => {
//     dispatch({ type: "SEPETTEN_CIKAR", payload: urunId });
//   };

//   return (
//     <CartContext.Provider
//       value={{ ...state, artir, azalt, sepettenSil, sepeteEkle }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };
