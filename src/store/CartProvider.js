import { useState, useEffect, useContext } from "react";
import axios from "axios";

import CartContext from "./cart-context";
import AuthContext from "./auth-context";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);

  const [totalAmount, setTotalAmount] = useState(0);
  const [items, setItems] = useState([]);
  useEffect(() => {
    updatedItemsToCart();
  },[]);

  const updatedItemsToCart = () => {  
    axios
      .get(
        `https://crudcrud.com/api/4d66a922604c4b65b605ee1b35a099c5/cart${authCtx.email}`
      )
      .then((res) => {
        let finalObj = [];
        let totalValue = 0;
        for (let i = 0; i < res.data.length; i++) {
          totalValue =
            totalValue + res.data[i].item.price * res.data[i].item.quantity;
          let obj = {
            crId: res.data[i]._id,
            id: res.data[i].item.id,
            title: res.data[i].item.title,
            price: res.data[i].item.price,
            quantity: res.data[i].item.quantity,
            imgUrl: res.data[i].item.imgUrl,
          };
          AddTOcartHandler(obj);
          
          finalObj = [...finalObj, obj];
        }
        setTotalAmount(totalValue);
        setItems(finalObj);
      });
  };

  const addItemToCartHandler = (item) => {
    const itemIndex = items?.findIndex((el) => el.id === item.id);
    if (itemIndex === -1) {
      axios
        .post(
          `https://crudcrud.com/api/4d66a922604c4b65b605ee1b35a099c5/cart${authCtx.email}`,
          {
            item,
          }
        )
        .then((res) => {
          updatedItemsToCart();
        });
    } else {
      let targetID;
      items.map((el) => {
        if (el.id === item.id) {
          targetID = el.crId;
          let item = {
            id: el.id,
            title: el.title,
            price: el.price,
            quantity: el.quantity + 1,
            imgUrl: el.imgUrl,
          };
          axios
            .put(
              `https://crudcrud.com/api/4d66a922604c4b65b605ee1b35a099c5/cart${authCtx.email}/${targetID}`,
              {
                item,
              }
            )
            .then((res) => {
              updatedItemsToCart();
              console.log(res);
            });
        }
    });
    }
  };

  const AddTOcartHandler = (item) => {};

  const removeItemFromCartHandler = (id) => {
    axios
      .delete(
        `https://crudcrud.com/api/4d66a922604c4b65b605ee1b35a099c5/cart${authCtx.email}/${id}`
      )
      .then((res) => {
        updatedItemsToCart();
      });
  };

  const cartContext = {
    items: items,
    totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
