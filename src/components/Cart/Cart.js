import React, { useContext } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartElements = useContext(CartContext);

  
  const cartitems = cartElements.items.map((elem) => (
    
    <CartItem 
    key={elem.id}
    id={elem.id}
    crId={elem.crId}
    imgUrl={elem.imgUrl}
    title={elem.title}
    price={elem.price}
    quantity={elem.quantity}
    />
   
    
    
  ));

  return (
    <Modal>
      <Container lg="4">
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h1>Cart</h1>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button variant="danger" onClick={props.onClose}>
              X
            </Button>
          </Col>
        </Row>

        <Table>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>{cartitems}</tbody>
        </Table>

        <Row>
          <Col style={{ textAlign: "right" }}>
            <h3>Total</h3>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h3>Rs.{cartElements.totalAmount}</h3>
          </Col>
        </Row>
        <Row>
          <Col style={{ textAlign: "center  " }}>
            <Button variant="info">PURCHASE</Button>
          </Col>
        </Row>
      </Container>
    </Modal>
  );
};

export default Cart;
