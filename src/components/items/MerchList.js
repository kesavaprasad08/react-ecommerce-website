import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const MerchList = (props) => {
  const cartCntx = useContext(CartContext);

  const addItemToCart = (event) => {
    cartCntx.addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      quantity: 1,
      imgUrl: props.imageUrl,
    });
  };

  return (

    <Col md={{ span: 3, offset: 5 }} className="mt-3">
      
      <Col key={props.id}>
      <Link to={`/store/${props.id}`}>
        <h5>{props.title}</h5>
        <img src={props.imageUrl} alt={props.title} width="200px" />
        <Col md={{ span: 3, offset: 0 }}>
          <span>
            Rs.
            <span>{props.price}</span>
          </span>
        </Col>
        </Link>
        <Col md={{ span: 7, offset: 2}}>
          <Button
            variant="info"
            size="sm"
            style={{ color: "white" }}
            onClick={addItemToCart}
          >
            Add to Cart
          </Button>
        </Col>
      </Col>
    </Col>
  );
};

export default MerchList;
