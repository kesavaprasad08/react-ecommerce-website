import { Link } from "react-router-dom";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import { Button, Navbar, Container } from "react-bootstrap";

function MainNavigation(props) {
  const cartCntx = useContext(CartContext);

  return (
    <>
    <header>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container>
          <Link to="/home">Home</Link>

          <Link to="/store">Store</Link>

          <Link to="/about">About</Link>
          <Button className="btn btn-info" onClick={props.onOpen} size="sm">
            Cart {cartCntx.items.length}
          </Button>
        </Container>
      </Navbar>
    </header>
    
    </>
  );
}

export default MainNavigation;
