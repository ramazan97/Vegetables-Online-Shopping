import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // -----------------

  const [fastCargoChecked, setFastCargoChecked] = useState(false);
  const cargoFee = 15;
  // const cartTotals = fastCargoChecked
  //   ? (subTotals + cargoFee).toFixed(2)
  //   : subTotals.toFixed(2);

  // ---------------------

  const subTotals = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.amount;
  }, 0);

  useEffect(() => {
    // const total = cart.reduce((accumulator, currentItem) => {
    //   return accumulator + currentItem.ucret * currentItem.amount;
    // }, 0);

    const total = fastCargoChecked
      ? (subTotals + cargoFee).toFixed(2)
      : subTotals.toFixed(2);

    setTotal(total);
  },[fastCargoChecked,subTotals]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  const addToCard = (product, id) => {
    const newItem = { ...product, amount: 1 };

    const cartItem = cart.find((item) => {
      return item._id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item._id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item._id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const increaseAmount = (id) => {
    const CartItem = cart.find((item) => item._id === id);
    addToCard(CartItem, id);
  };

  const decriseAmount = (id) => {
    const CartItem = cart.find((item) => {
      return item._id === id;
    });
    if (CartItem) {
      const newCart = cart.map((item) => {
        if (item._id === id) {
          return { ...item, amount: CartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (CartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCard,
        removeFromCart,
        decriseAmount,
        clearCart,
        itemAmount,
        increaseAmount,
        total,
        fastCargoChecked,
        setFastCargoChecked,
        setCart,cargoFee
      }}
    >
      {children}{" "}
    </CartContext.Provider>
  );
};

export default CartProvider;
