import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ border: "1px solid #ccc", padding: 10 }}>
      <img src={product.thumbnail} width="100%" alt={product.title} />
      <h4>{product.title}</h4>
      <p>₹{product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
