import React from "react";
import "./displayProduct.css";
import sofa from "../../assets/dining-room.png";

import Slider from "react-slick";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function DisplayProduct() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Untuk menampilkan satu slide di layar utama
    slidesToScroll: 1,
    rows: 2, // Menambahkan dua baris
    slidesPerRow: 4, // Menampilkan dua gambar per baris
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          rows: 2,
          slidesPerRow: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <div className="headline-text-display">
        <span className="headline-display">All Product</span>
        <span className="text-display">
          The products we provide only for you as our service are selected from the <br />
          best products with number 1 quality in the world
        </span>
      </div>
      <Slider {...settings}>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
        <div className="slider-img-cont">
          <div className="img-container">
            <FontAwesomeIcon icon={faPlus} className="icon-plus" />
            <img src={sofa} alt="sofa" className="display-product" />
          </div>

          <h2>item 1</h2>
          <p>Item 1</p>
        </div>
      </Slider>
    </div>
  );
}

export default DisplayProduct;
