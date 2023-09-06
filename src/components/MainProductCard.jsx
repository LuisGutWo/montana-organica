import React from "react";
import Card from "react-bootstrap/Card";

export default function MainProductCard({ item }) {
  return (
    <Card>
      <Card.Img variant="top" src={item.img}/>

      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
          <p>${item.desc} </p>
          <b>${item.price}</b>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
