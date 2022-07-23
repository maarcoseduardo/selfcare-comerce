import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    
  const [productInCart, setProductInCart] = useState([]);
  
  return (
    <CartContext.Provider
      value={{
        productInCart,
        setProductInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  const { productInCart, setProductInCart } = context;

  return { productInCart, setProductInCart };
}