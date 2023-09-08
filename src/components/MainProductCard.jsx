import React from "react";
import Card from "react-bootstrap/Card";
import { formatPrice } from "./formatPrice";

export default function MainProductCard({ item }) {
  return (
    <Card className="main-product-card">
      <Card.Img variant="top" src={item.img} className="card-image" />

      <Card.Body>
        <Card.Title className="card-title">{item.name}</Card.Title>
        <Card.Text>
          <p>{item.desc} </p>
          <b className="card-price">{formatPrice(item.price)}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
