import React from "react";
import "./subscription.css";

import background from "../../assets/bg-lamp.png";

const Subscription = () => {
  return (
    <div className="subcription">
      <img src={background} alt="background" className="img-background" />
      <div className="subs-content-wrapper">
        <h3 className="discount-heading">
          Get more discount <br />
          Off your order
          <p className="join-mail">Join our mailing list</p>
        </h3>
        <div className="email-subscription">
          <input type="email" placeholder="Enter your email" className="email-subscription-input" />
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
