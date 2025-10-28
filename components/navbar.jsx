import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { FaShoppingCart, FaHome } from "react-icons/fa";

export default function Navbar() {
  const { state } = useContext(CartContext);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container-fluid">
        {/* Logo / Home */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2 fw-bold"
        >
          <FaHome /> E-Shop
        </Link>

        {/* Toggle for small screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
              >
                Produits
              </Link>
            </li>

            <li className="nav-item position-relative">
              <Link
                to="/cart"
                className={`nav-link d-flex align-items-center ${
                  location.pathname === "/cart" ? "active" : ""
                }`}
              >
                <FaShoppingCart size={20} />
                <span className="ms-1">Panier</span>
                {state.cart.length > 0 && (
                  <Badge
                    bg="danger"
                    pill
                    className="position-absolute top-0 start-100 translate-middle"
                  >
                    {state.cart.length}
                  </Badge>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
