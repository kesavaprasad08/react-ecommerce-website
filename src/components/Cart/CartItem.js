import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CartItem = (elem) =>{
    const cartCntx = useContext(CartContext);
    const removeItemFromCart= () => {
      // console.log(elem)
        cartCntx.removeItem(elem.crId);
    }
    return(
        <>
        <tr key={elem.id}>
      <td>
        <img src={elem.imgUrl} width={"75px"} alt="hello" />
        <span style={{ margin: "1px 3px" }}>{elem.title}</span>
      </td>
      <td>
        <h5>{elem.price}</h5>
      </td>
      <td>
        <p
          style={{ border: "solid", textAlign: "center", borderColor: "aqua", color:"black" }}
        > 
          {elem.quantity}
        </p>
        <Button variant="danger" size="m" onClick={removeItemFromCart}>
          REMOVE
        </Button>
      </td>
    </tr>
        </>
    )
}

export default CartItem;