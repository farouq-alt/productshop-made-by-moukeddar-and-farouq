import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const location = useLocation();

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
