// tab item disebelah kanan atas yang akan keluar  ketika cart di klik

import { useSelector, useDispatch } from "react-redux";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import CartItem from "../cartItem/cartItem";
import { toggleStatusTab } from "../../stores/cart";
import React, { useEffect } from "react";
import "./carttab.css";
const CartTab = () => {
  const carts = useSelector((store) => store.cart.items);
  const statusTab = useSelector((store) => store.cart.statusTab);
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = React.useState(false);

  useEffect(() => {
    console.log("Status Tab:", statusTab);
  }, [statusTab]);

  const handleCloseTab = () => {
    // console.log("Attempting to toggle cart tab...");
    console.log("Toggling cart tab... Current status:", statusTab);
    dispatch(toggleStatusTab());
  };

  const totalAmount = carts.reduce((total, item) => total + item.price * item.quantity, 0);

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
        {/* <button className="btn-checkout-tab">Checkout</button> */}
        <PayPalScriptProvider options={{ "client-id": "client_id" }}>
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={(data, actions) => {
              setIsProcessing(true);
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: totalAmount.toFixed(2),
                      currency_code: "USD",
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then((details) => {
                setIsProcessing(false);
                alert("Transaction completed by " + details.payer.name.given_name);
                // console.log("Payment successful:", details);
                console.log({ details });
              });
            }}
            onError={(err) => {
              setIsProcessing(false);
              console.error("Error:", err);
              alert("An error occurred during the transaction. Please try again.");
            }}
          ></PayPalButtons>
        </PayPalScriptProvider>
      </div>
    </div>
  );
};

export default CartTab;
