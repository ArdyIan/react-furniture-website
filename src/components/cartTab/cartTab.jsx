// tab item disebelah kanan atas yang akan keluar  ketika cart di klik

import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cartItem/cartItem";
import { toggleStatusTab } from "../../stores/cart";
import React, { useEffect } from "react";
import "./carttab.css";
const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Status Tab:", statusTab);
  }, [statusTab]);

  const handleCloseTab = () => {
    // console.log("Attempting to toggle cart tab...");
    console.log("Toggling cart tab... Current status:", statusTab);
    dispatch(toggleStatusTab());
  };

  return (
    <div className={`cart-tab-12 ${statusTab ? "opened-cart" : "closed-cart"}`}>
      <h2 className="cart-header-tab">Shopping Cart</h2>
      <div className="cart-content-tab">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="cart-footer-tab">
        <button className="btn-closed-tab" onClick={handleCloseTab}>
          CLOSE
        </button>
        <button className="btn-checkout-tab">Checkout</button>
      </div>
    </div>
  );
};

export default CartTab;
