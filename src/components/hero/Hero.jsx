import React from "react";
import "./hero.css";
import sofa from "../../assets/sofa.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="img-sofa">
        <img src={sofa} alt="sofa" className="sofa" />
      </div>

      <div className="text-hero">
        <span className="headline">
          We Create your home <br />
          More aesthetic
        </span>
        <span className="text1">Furniture power is a software as a service for multipurpose business management systems.</span>
        <div className="checklist">
          <div className="checklist-item">
            <span className="check-icon">✔</span>
            <div className="test">
              <span className="check-title">Valuation Services</span>
              <div className="check-description">Sometimes features require a short description. This can be detailed description</div>
            </div>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✔</span>
            <div>
              <span className="check-title">Valuation Services</span>
              <div className="check-description">Sometimes features require a short description. This can be detailed description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
