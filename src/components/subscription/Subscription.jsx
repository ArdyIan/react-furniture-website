import React from "react";
import "./subscription.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import background from "../../assets/bg-lamp.png";

function Subscription() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const recaptchaRef = React.createRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    // console.log(email);

    const recaptchaValue = recaptchaRef.current.getValue();

    if (!recaptchaValue) {
      setErrorMessage("Please confirm you are not a robot.");
      //alert use if you wnt to test is recaptcha wotk or not
      //if youre click the recaptcha and you see the alert that mean recaptcha is work
      // alert("Please confirm you are not a robot.");
    } else {
      try {
        const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "MailerList api key",
          },
          body: JSON.stringify({
            email: email,
            groups: ["MailerList group id"],
          }),
        });
        // if (!response.ok) {
        //   throw new Error("Failed to subscribe");
        // }

        const data = await response.json();
        console.log(data);

        if (data.errors) {
          //notification for input valid email address
          //if we not write error message in here API from mailerlite will automatically give us error message
          setErrorMessage(data?.message);
          return;
        }

        setSuccessMessage("Subscribed successfully");
      } catch (error) {
        console.log(error);
        setErrorMessage("Failed to subscribe. Please try again later.");
      }
    }
  };

  return (
    <div className="subcription">
      <img src={background} alt="background" className="img-background" />

      <form onSubmit={handleSubmit}>
        <div className="subs-content-wrapper">
          <h3 className="discount-heading">
            Get more discount <br />
            Off your order
            <p className="join-mail">Join our mailing list</p>
          </h3>
          <div className="email-subscription">
            <input type="email" placeholder="Enter your email" className="email-subscription-input" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <ReCAPTCHA ref={recaptchaRef} sitekey="recaptcha site key" />

            {errorMessage && <p className="error">{errorMessage}</p>}
            {successMessage && <p className="success">{successMessage}</p>}

            <button type="submit" className="shop-now-button">
              Shop Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Subscription;
