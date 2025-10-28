import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { Button } from "react-bootstrap";

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: "GET_TOTAL_AMOUNT" });
  }, [state.cart, dispatch]);

  if (state.cart.length === 0)
    return <p className="m-3">🛒 Votre panier est vide.</p>;

  return (
    <div className="container mt-4">
      <h4>🛍️ Votre Panier</h4>
      {state.cart.map((p) => (
        <div
          key={p.id}
          className="d-flex align-items-center justify-content-between border-bottom py-2"
        >
          <div>{p.name}</div>
          <div>{p.price} MAD</div>

          <div className="d-flex align-items-center">
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                dispatch({
                  type: "MODIFY_QTE",
                  payload: { id: p.id, qte: Math.max(p.qte - 1, 1) },
                })
              }
            >
              −
            </Button>

            <span className="mx-2">{p.qte}</span>

            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() =>
                dispatch({
                  type: "MODIFY_QTE",
                  payload: { id: p.id, qte: p.qte + 1 },
                })
              }
            >
              +
            </Button>
          </div>

          <Button
            variant="danger"
            size="sm"
            onClick={() =>
              dispatch({ type: "REMOVE_FROM_CART", payload: p.id })
            }
          >
            Supprimer
          </Button>
        </div>
      ))}

      <div className="mt-3">
        <strong>Total: {state.total} MAD</strong>
      </div>

      <Button
        variant="secondary"
        className="mt-3"
        onClick={() => dispatch({ type: "CLEAR_CART" })}
      >
        Vider le panier
      </Button>
    </div>
  );
}
