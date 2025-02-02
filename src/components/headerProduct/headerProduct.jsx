//header halaman homepage

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iconCart from "../../assets/images/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { toggleStatusTab } from "../../stores/cart";

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
    <header className="product-header">
      <Link to="/" className="home-click">
        Home.
      </Link>
      <div className="cart-tab" onClick={handleOPenTabCart}>
        <img src={iconCart} alt="" className="icon-cart-header" />
        <span className="cart-tab-total">{totalQuantity}</span>
      </div>
    </header>
  );
};

export default headerProduct;
