import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./MainHeader.module.css";
import HeaderCart from "./Cart/HeaderCart";
import { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import AuthContext from "../store/auth-context";
const MainHeader = () => {
  const authCtx = useContext(AuthContext);
  const [cartShown, setCartIsShown] = useState(false);
  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      <header className={classes.header}>
        <Navbar>
          <ul>
            <li>
              <NavLink  to="/">
                Welcome
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/store">
                Store
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={classes.active} to="/contactus">
                Contact Us
              </NavLink>
            </li>
            {!authCtx.isLoggedIn && <li>
              <NavLink activeClassName={classes.active} to="/auth">
                Login
              </NavLink>
            </li> }
           
            <li style={{ marginLeft: "400px", textAlign: "rigth" }}>
              <HeaderCart onOpenCart={ShowCartHandler} />
            </li>
          </ul>
        </Navbar>
      </header>

      {cartShown && <Cart onClose={HideCartHandler} />}
    </>
  );
};

export default MainHeader;
