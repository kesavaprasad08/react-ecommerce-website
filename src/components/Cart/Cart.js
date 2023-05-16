import React, { useContext } from "react";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {


  const cartElements = useContext(CartContext);

  const cartitems = cartElements.items.map((elem) => (
    <tr key={elem.id}>
      <td>
        <img src={elem.imgUrl} width={"75px"} alt="hello" />
        <span style={{ margin: "1px 3px" }}>{elem.title}</span>
      </td>
      <td>
        <h5>{elem.price}</h5>
      </td>
      <td>
        <p
          style={{ border: "solid", textAlign: "center", borderColor: "aqua" }}
        >
          {elem.quantity}
        </p>
        <Button variant="danger" size="m">
          REMOVE
        </Button>
      </td>
    </tr>
    
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
            <h3>$37.97</h3>
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
