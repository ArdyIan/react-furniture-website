import "./testimonial.css";
import diningRoom from "../../assets/dining-room.png";
import profile1 from "../../assets/profile-pic1.png";

import React, { useRef } from "react";
import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Testimonial() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="testimonial">
      <div className="testimonial-baris">
        <div className="testimonial-content">
          <div className="headline-testimoni">What people are saying about us</div>
          <div className="slider-testimoni">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div key={1}>
                <div className="testimoni-section">
                  <img src={profile1} alt="profile1" className="profile-img" />
                  <div className="profile-name">
                    <h3>John Doe</h3>
                    <p>CEO at Company</p>
                  </div>
                </div>
                <div className="testimoni-text">“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</div>
              </div>
              <div key={2}>
                <div className="testimoni-section">
                  <img src={profile1} alt="profile1" className="profile-img" />
                  <div className="profile-name">
                    <h3>John Doe</h3>
                    <p>CEO at Company</p>
                  </div>
                </div>
                <div className="testimoni-text">“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</div>
              </div>
              <div key={3}>
                <div className="testimoni-section">
                  <img src={profile1} alt="profile1" className="profile-img" />
                  <div className="profile-name">
                    <h3>John Doe</h3>
                    <p>CEO at Company</p>
                  </div>
                </div>
                <div className="testimoni-text">“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</div>
              </div>
              <div key={4}>
                <div className="testimoni-section">
                  <img src={profile1} alt="profile1" className="profile-img" />
                  <div className="profile-name">
                    <h3>John Doe</h3>
                    <p>CEO at Company</p>
                  </div>
                </div>
                <div className="testimoni-text">“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”</div>
              </div>
            </Slider>
            <div className="slider-buttons">
              <FontAwesomeIcon icon={faArrowLeft} className="button" onClick={previous}/>
              <FontAwesomeIcon icon={faArrowRight} className="button" onClick={next}/>
              {/* <button className="button" onClick={next}>
                Next
              </button> */}
            </div>
          </div>
        </div>
        <div className="testimoni-img">
          <img src={diningRoom} alt="diningRoom" className="img-testimoni" />
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
