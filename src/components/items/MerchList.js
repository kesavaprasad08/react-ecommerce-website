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
    <Col style={{marginLeft:'100px', marginRight:'100px'}} className="mt-5">
      {/* < key={props.id}> */}
      <div style={{textAlign:'center'}}>
        <Link to={`/store/${props.id}`}>
          
          <h5 >{props.title}</h5>
          <img src={props.imageUrl} alt={props.title} width="200px" />
          <Col>
            <span>
              Rs.
              <span>{props.price}</span>
            </span>
          </Col>
        </Link>
        <Col>
          <Button
            variant="info"
            size="sm"
            style={{ color: "white",marginBottom:'10px'}}
            onClick={addItemToCart}
          >
            ADD TO CART
          </Button>
          
        </Col>
        </div>
    </Col>
  );
};

export default MerchList;
