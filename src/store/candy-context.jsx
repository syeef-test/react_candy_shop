import React from "react";

const CandyContext = React.createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item, quantity) => {},
});

export default CandyContext;
