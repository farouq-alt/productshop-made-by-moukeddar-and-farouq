import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Card, Button } from "react-bootstrap";

export default function ProductCard({ prod }) {
  const { dispatch } = useContext(CartContext);

  return (
    <Card style={{ width: "18rem" }} className="m-2 p-2 shadow-sm">
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>Prix : {prod.price} MAD</Card.Text>
        <Button
          variant="primary"
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
        >
          Ajouter au panier
        </Button>
      </Card.Body>
    </Card>
  );
}
