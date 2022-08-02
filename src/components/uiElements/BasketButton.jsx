import React from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function BasketButton() {
  return (
    <Link to="/basket" className="basket-btn">
      <FaShoppingBasket />
    </Link>
  );
}
