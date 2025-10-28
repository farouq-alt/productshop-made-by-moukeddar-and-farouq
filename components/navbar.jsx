import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { state } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark p-3 d-flex justify-content-between">
      <Link to="/" className="text-white text-decoration-none">
        <h3>🛒 E-Shop</h3>
      </Link>
      <div>
        <Link to="/" className="text-white text-decoration-none">
          home
        </Link>
        <Link to="/cart" className="text-white text-decoration-none">
          Panier : {state.cart.length} produits
        </Link>
      </div>
    </nav>
  );
}
