import React from "react";

const CartContext = React.createContext({
  items: [],
  removeItem: (item) => {},
  addItem: (item, quantity) => {},
});

export default CartContext;
