import React from "react";
import MerchList from "./MerchList";
import { Row, Container, Col, Button } from "react-bootstrap";

const items = (props) => {
  const DummyList = [
    {
      id: "1",

      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: "2",

      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: "3",

      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: "4",

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];
  const items = DummyList.map((item) => {
    return (
      <MerchList
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    );
  });

  return (
    <Container>
      <Row>
        {items}
      </Row>
      <Row>
      <Col md={{ span: 3, offset: 5 }} className="mt-4">
        <Button onClick={props.onOpen} variant="secondary" style={{ color: "aqua" }} >
          See the Cart 
        </Button>
      </Col>
      </Row>
    </Container>
  );
};

export default items;
