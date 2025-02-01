import React from "react";
import "./header.css";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

function Header() {
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
        const response = await fetch("--", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Api Key",
          },
          body: JSON.stringify({
            email: email,
            groups: ["--"],
          }),
        });
        // if (!response.ok) {
        //   throw new Error("Failed to subscribe");
        // }

        const data = await response.json();
        console.log(data);

        if (data.errors) {
          //notification for input valid email address
          
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
    <div className="halloo1">
      <form onSubmit={handleSubmit}>
        {errorMessage && <p className="error">{errorMessage}</p>}
        {successMessage && <p className="success">{successMessage}</p>}
        <input type="email" placeholder="Email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
        <ReCAPTCHA ref={recaptchaRef} sitekey="Api Key" />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
export default Header;
