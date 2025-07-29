import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const count = useSelector((state) => state.cart.items.length);
  return (
    <div style={{ padding: 10, fontWeight: "bold" }}>
      🛒 Cart: {count} item(s)
    </div>
  );
};

export default Cart;
