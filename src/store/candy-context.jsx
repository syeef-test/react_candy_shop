import React from "react";

const CandyContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item, quantity) => {},
  addItemByOne: (item) => {},
});

export default CandyContext;
