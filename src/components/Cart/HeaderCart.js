import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import { useContext } from "react";

const HeaderCart = (props) => {
  const cartCntx = useContext(CartContext);
  return (
    <Button onClick={props.onOpenCart} className="btn btn-dark" size="sm" style={{borderColor:'#56CCF2',color:'white'}}>
      Cart {cartCntx.items.length}
    </Button>
  );
};

export default HeaderCart;
