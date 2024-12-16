import React from "react";
import "./advertisement.css";
import sofa from "../../assets/dining-room.png";

const Advertisement = () => {
  return (
    <div className="hero-container-ads">
      <div className="text-hero-ads">
        <span className="headline">
          The Best Furniture
          <br />
          Manufacturer of your choice
        </span>
        <span className="text1">
          Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services
        </span>
      </div>

      <div className="img-sofa-ads">
        <img src={sofa} alt="sofa" className="sofa-ads" />
      </div>
    </div>
  );
};

export default Advertisement;
