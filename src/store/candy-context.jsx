import React from "react";

const CandyContext = React.createContext({
  items: [],
  addItem: (item, quantity) => {},
  removeItem: (item, quantity) => {},
});

export default CandyContext;
