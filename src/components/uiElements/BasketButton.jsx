import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBasket } from "react-icons/fa";
export default function BasketButton() {
  return (
    <Link to="/basket" className="basket-btn">
      <FaShoppingBasket />
    </Link>
  );
}
