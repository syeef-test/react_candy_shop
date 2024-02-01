import React, { useState, useEffect, useContext } from "react";
import CartContext from "./cart-context";
import CandyContext from "./candy-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);
  const candyContext = useContext(CandyContext);

  // const addItemByOneHandler = (newItem) => {
  //   const existingItemIndex = items.findIndex(
  //     (item) => item.candy_name === newItem.candy_name
  //   );

  //   if (existingItemIndex !== -1) {
  //     let updatedCartItems = [...items];
  //     updatedCartItems[existingItemIndex].quantity += 1;
  //     updateItems(updatedCartItems);
  //   } else {
  //     updateItems((prevItems) => [...prevItems, { ...newItem, quantity: 1 }]);
  //   }
  // };

  // const addItemByTwoHandler = (newItem) => {
  //   const existingItemIndex = items.findIndex(
  //     (item) => item.candy_name === newItem.candy_name
  //   );

  //   if (existingItemIndex !== -1) {
  //     let updatedCartItems = [...items];
  //     updatedCartItems[existingItemIndex].quantity += 2;
  //     updateItems(updatedCartItems);
  //   } else {
  //     updateItems((prevItems) => [...prevItems, { ...newItem, quantity: 2 }]);
  //   }
  // };

  // const addItemByThreeHandler = (newItem) => {
  //   const existingItemIndex = items.findIndex(
  //     (item) => item.candy_name === newItem.candy_name
  //   );

  //   if (existingItemIndex !== -1) {
  //     let updatedCartItems = [...items];
  //     updatedCartItems[existingItemIndex].quantity += 3;
  //     updateItems(updatedCartItems);
  //   } else {
  //     updateItems((prevItems) => [...prevItems, { ...newItem, quantity: 3 }]);
  //   }
  // };

  const removeItemToCartHandler = (removedItem) => {
    const existingItemIndex = items.findIndex(
      (item) => item.candy_name === removedItem.candy_name
    );

    if (existingItemIndex !== -1) {
      let updatedCartItems = [...items];
      const currentQuantity = updatedCartItems[existingItemIndex].quantity;

      if (currentQuantity > 1) {
        updatedCartItems[existingItemIndex].quantity -= 1;
      } else {
        updatedCartItems = updatedCartItems.filter(
          (_, index) => index !== existingItemIndex
        );
      }

      updateItems(updatedCartItems);
    }
  };

  const addItemToCartHandler = (newItem, quantity) => {
    //only for cart increase button
    console.log(newItem, quantity);
    console.log("addItemToCartHandler", newItem);

    const existingItemIndex = items.findIndex(
      (item) => item.candy_name === newItem.candy_name
    );

    // console.log(
    //   "existing_item_in_candylist_quantity",
    //   candyContext.items[existingItemIndex].quantity
    // );

    if (existingItemIndex !== -1) {
      let updatedCartItems = [...items];
      updatedCartItems[existingItemIndex].quantity += quantity;
      updateItems(updatedCartItems);
    } else {
      updateItems((prevItems) => [
        ...prevItems,
        { ...newItem, quantity: quantity },
      ]);
    }
  };

  useEffect(() => {
    console.log("cart:", items);
  }, [items]);

  const cartContext = {
    items: items,
    removeItem: removeItemToCartHandler,
    addItem: addItemToCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
