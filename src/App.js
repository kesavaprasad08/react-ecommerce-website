import React, { useState } from "react";
import "./App.css";

import CartProvider from "./store/CartProvider";
import EStoreHeader from "./components/layout/EStoreHeader";
import EStoreSummary from "./components/layout/EStoreSummary";
import Items from "./components/items/Items";
import EStoreFooter from "./components/layout/EStoreFooter";
import Cart from "./components/Cart/Cart";

const App = () => {
  const [cartShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartShown && <Cart onClose={HideCartHandler} />}
      <EStoreHeader onOpen={ShowCartHandler} />
      <EStoreSummary />
      <h1 className="text-center"> Merch</h1>
      <Items onOpen={ShowCartHandler}/>

      <EStoreFooter />
    </CartProvider>
  );
};

export default App;
