import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ProductCard from "./productcard";

export default function ListProduct() {
  const { state } = useContext(CartContext);
  return (
    <div className="d-flex flex-wrap justify-content-center mt-3">
      {state.produits.map((p) => (
        <ProductCard key={p.id} prod={p} />
      ))}
    </div>
  );
}
