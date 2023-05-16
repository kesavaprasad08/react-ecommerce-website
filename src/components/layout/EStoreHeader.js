import React, { useContext } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const EStoreHeader = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <div>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Brand>Store</Navbar.Brand>
          <Navbar.Brand>About</Navbar.Brand>
          <Button className="btn btn-info" onClick={props.onOpen} size="sm">
            Cart {cartCtx.items.length}
          </Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default EStoreHeader;
