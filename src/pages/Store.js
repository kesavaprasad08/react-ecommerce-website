import React, { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import EStoreSummary from "../components/layout/EStoreSummary";
import Items from "../components/items/Items";
import EStoreFooter from "../components/layout/EStoreFooter";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderCart from "../components/Cart/HeaderCart";

function StorePage(props) {
  const [cartShown, setCartIsShown] = useState(false);
  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <header>
        <Navbar style={{backgroundColor:'black'}} expand="sm" variant="dark">
          <Container>
            <Link to="/" style={{color:'white'}}>HOME</Link>

            <Link to="/store" style={{color:'white'}}>STORE</Link>

            <Link to="/about" style={{color:'white'}}>ABOUT</Link>
            <HeaderCart onOpenCart={ShowCartHandler}/>
          </Container>
        </Navbar>
      </header>
      {cartShown && <Cart onClose={HideCartHandler} />}

      <EStoreSummary />
      <h1 className="text-center"> Merch</h1>
      <Items onOpen={ShowCartHandler} />
    
      <EStoreFooter />
    </CartProvider>
  );
}

export default StorePage;
