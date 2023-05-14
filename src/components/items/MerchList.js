import React, { Fragment } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";

const DummyList = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const MerchList = () => {
  const productList = DummyList.map((product) => (
    <Col md={{ span: 3, offset: 2 }} className="mt-4">
      <Row>
        <Col>
          <h5>{product.title}</h5>

          <img src={product.imageUrl} alt={product.title} width="200px" />
            <Col md={{ span: 3, offset:0 }}  >
          <span>
            Rs.
            <span>{product.price}</span>
          </span>
          </Col>
          
          <Col md={{ span: 5, offset:0 }}  >
          <Button variant="info" size="sm"  style={{color:"white"}}>Add to Cart</Button>
          
          </Col>
          
        </Col>
      </Row>
    </Col>
  ));
  return (
    <Fragment>
      <h1 class="text-center"> Merch</h1>
      <Container>
        <Row>{productList}</Row>
        <Col md={{ span: 3, offset: 5 }} className="mt-4" >
        <Button variant='secondary' style={{color:"aqua"}}>See the Cart</Button>
        </Col>
      </Container>
    </Fragment>
  );
};

export default MerchList;
