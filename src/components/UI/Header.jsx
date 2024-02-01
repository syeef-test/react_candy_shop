import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

function Header({ openModal }) {
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext.items.reduce((curQuantity, item) => {
    return curQuantity + Number(item.quantity);
  }, 0);

  return (
    <div>
      <button onClick={openModal}>Cart: {totalQuantity}</button>
    </div>
  );
}

export default Header;
