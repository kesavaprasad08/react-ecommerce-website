  import React from "react";
  import { Container,Row,Col,Button,Table } from "react-bootstrap";
  import Modal from "../UI/Modal";

  const Cart = (props) => {
    const cartElements = [
      {
        title: "Colors",

        price: 100,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

        quantity: 2,
      },

      {
        title: "Black and white Colors",

        price: 50,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

        quantity: 3,
      },

      {
        title: "Yellow and Black Colors",

        price: 70,

        imageUrl:
          "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

        quantity: 1,
      },
    ];

    const cartitems = cartElements.map((elem) => (
      <tr>
        <td>
        <img src={elem.imageUrl} width={'75px'} alt="hello" />
        <span style={{margin:'1px 3px'}}>
        {elem.title} 
        </span>
        </td>
        <td>
        <h5>{elem.price}</h5>
        </td>
        <td>
          <p style={{border:'solid', textAlign:'center',borderColor:'aqua'}}>
        {elem.quantity}
        </p>
        <Button variant="danger" size="m" >REMOVE</Button>
        </td>

      </tr>
      // <Row >
      //     <Col xs lg='2'>
      //     <img src={elem.imageUrl} width={'75px'} alt="hello" />
      //   </Col>
      //   <Col xs lg='2'>
      //     <h5>{elem.title}</h5>
      //   </Col>
      //   <Col xs lg='2'>
      //     <h5>{elem.price}</h5>
      //   </Col>
        
      //   <Col xs lg='2'>
      //     <h5>{elem.quantity}</h5>
      //   </Col>
      //   <Col xs lg='2'>
      //     <Button variant="danger" size="sm">REMOVE</Button>
      //   </Col>
      // </Row>
    ));

    return (
      <Modal>
      <Container  xs lg='4'>
        <Row>
          <Col  style={{textAlign:'center'}}>
          <h1>
          Cart
          </h1>
          </Col>
          <Col style={{textAlign:'right'}} >
          <Button  variant="danger" onClick={props.onClose}  >X</Button></Col>
        </Row>
  
        {/* <Row> 
          <Col xs lg='2'>Item</Col>
          <Col xs lg='2'>Item Name</Col>
          <Col xs lg='2'>Price</Col>
          <Col xs lg='2'>Quantity</Col>
          <Col xs lg='2'></Col>
        </Row> */}
        <Table>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            
          </tr>
        </thead>
        <tbody>
        {cartitems}
        </tbody>
        </Table>
        
        <Row>
          <Col style={{textAlign:'right'}}><h3>Total</h3></Col>
          <Col style={{textAlign:'right'}}><h3>$37.97</h3></Col>
        </Row>
        <Row>
          <Col style={{textAlign:'center  '}}>
          <Button variant="info">PURCHASE</Button></Col>
        </Row>
      </Container>
      </Modal>
    );
  };

  export default Cart;
