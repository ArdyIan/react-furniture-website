import React from "react";
import "./category.css";
import Slider from "react-perfect-slider";
import sofa from "../../assets/sofa.png";

const Category = ({ onClick }) => {
  return (
    <div className="category-left">
      <div className="content-left">
        <div className="headline1">New In</div>
        <div className="headline1">Store Now</div>
        <div className="cat-text">Get the latest items immediately with promo prices</div>
        <span className="clickable-text" onClick={onClick}>
          <span className="check-all-click">Check All -&gt;</span>
        </span>
      </div>

      <div className="carousel-slider1">
        <Slider renderControls={(next, previous) => [<button onClick={previous}>Previous</button>, <button onClick={next}>Next</button>]}>
          <div>
            <img src={sofa} alt="sofa" className="sofa" />
          </div>
          <div>
            <img src={sofa} alt="sofa" className="sofa" />
          </div>
          <div>
            <img src={sofa} alt="sofa" className="sofa" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Category;
