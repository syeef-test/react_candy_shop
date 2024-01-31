import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

function Header() {
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  return <div>Header Cart:{totalQuantity}</div>;
}

export default Header;
