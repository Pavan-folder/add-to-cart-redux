import React from "react";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "./productSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      placeholder="Search products..."
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      style={{ margin: "10px", padding: "5px" }}
    />
  );
};

export default SearchBar;
