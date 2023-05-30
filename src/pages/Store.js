import React, { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import EStoreSummary from "../components/layout/EStoreSummary";
import Items from "../components/items/Items";
import EStoreFooter from "../components/layout/EStoreFooter";
import { Container, NavLink, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderCart from "../components/Cart/HeaderCart";
import classes from './Store.module.css'
import MainHeaer from "../components/MainHeader";

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
      {/* <header>
        <Navbar style={{ backgroundColor: "black" }} expand="sm" variant="dark">
          <Container>
            <NavLink activeClassName={classes.active} to="/" style={{ color: "white" }}>
              HOME
            </NavLink>

            <NavLink activeClassName={classes.active} to="/store" style={{ color: "white" }}>
              STORE
            </NavLink>

            <NavLink activeClassName={classes.active} to="/about" style={{ color: "white" }}>
              ABOUT
            </NavLink>

            <NavLink activeClassName={classes.active} to="/contactus" style={{ color: "white" }}>
              Contact Us
            </NavLink>

            <HeaderCart onOpenCart={ShowCartHandler} />
          </Container>
        </Navbar>
      </header> */}
      <MainHeaer/>
      {cartShown && <Cart onClose={HideCartHandler} />}

      <EStoreSummary />
      <h1 className="text-center"> Merch</h1>
      <Items onOpen={ShowCartHandler} />

      <EStoreFooter />
    </CartProvider>
  );
}

export default StorePage;
