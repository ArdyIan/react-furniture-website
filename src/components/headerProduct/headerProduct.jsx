//header halaman homepage

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconCart from "../../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../../stores/cart";
import "./headerproduct.css";
const headerProduct = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  const handleOPenTabCart = () => {
    console.log("Attempting to open cart tab...");
    dispatch(toggleStatusTab());
  };

  return (
    <header className="header">
      <Link to="/" className="home-link">
        Home.
      </Link>
      <div className="cart-icon" onClick={handleOPenTabCart}>
        <img src={iconCart} alt="" className="cart-image" />
        <span className="cart-badge">{totalQuantity}</span>
      </div>
    </header>
  );
  
};

export default headerProduct;
