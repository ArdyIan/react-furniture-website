// tab item disebelah kanan atas yang akan keluar  ketika cart di klik

import { useSelector, useDispatch } from "react-redux";
import CartItem from "../cartItem/cartItem";
import { toggleStatusTab } from "../../stores/cart";
import React, { useEffect } from "react";

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
    
    <div className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] transform transition-transform duration-500 ${statusTab ? "translate-x-0" : "translate-x-full"}`}>
      {/* <h2 className="text-white">CartTab Debugging</h2> */}
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div className="p-5 flex-1 overflow-y-auto">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        <button className="bg-black text-white" onClick={handleCloseTab}>
          CLOSE
        </button>
        <button className="bg-amber-600 text-white">Checkout</button>
      </div>
      {/* <div>cart tab testing</div> */}
    </div>
  );

};

export default CartTab;
