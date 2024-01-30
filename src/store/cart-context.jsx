import React from "react";

const CartContext = React.createContext({
  items: [],
  addItemByOne: (item) => {},
  addItemByTwo: (item) => {},
  addItemByThree: (item) => {},
  removeItem: (item) => {},
});

export default CartContext;
