import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const location = useLocation();

  return (
    <nav className="navbar navbar-dark bg-dark px-4 d-flex justify-content-between align-items-center">
      {/* Left side: logo */}
      <Link to="/" className="navbar-brand mb-0 h1 text-white">
        🛍️ E-Shop
      </Link>

      {/* Right side: links */}
      <div className="d-flex gap-3">
        <Link
          to="/"
          className={`nav-link ${
            location.pathname === "/" ? "text-primary" : "text-white"
          }`}
        >
          Produits
        </Link>
        <Link
          to="/cart"
          className={`nav-link ${
            location.pathname === "/cart" ? "text-primary" : "text-white"
          }`}
        >
          Panier ({state.cart.length})
        </Link>
      </div>
    </nav>
  );
}
