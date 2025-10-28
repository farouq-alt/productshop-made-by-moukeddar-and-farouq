import React, { createContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

export const CartContext = createContext();

const initialState = {
  produits: [
    { id: 1, name: "Produit A", price: 100 },
    { id: 2, name: "Produit B", price: 150 },
    { id: 3, name: "Produit C", price: 200 },
  ],
  cart: [],
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
