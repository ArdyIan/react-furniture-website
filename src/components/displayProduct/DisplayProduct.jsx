import React from "react";
import { Link } from "react-router-dom";
import "./displayProduct.css";
import sofa from "../../assets/dining-room.png";
import data from "../../constants/productData.json";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

//display product homepage

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
        <span className="headline-display">Our Product</span>
        <span className="text-display">
          The products we provide only for you as our service are selected from the <br />
          best products with number 1 quality in the world
        </span>
        <div className="product-list">
          <h2 className="list-product">List Product</h2>
          <Link to={"/product"} className="see-all-product">
            See All
          </Link>
        </div>
      </div>
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="slider-img-cont">
            {/* <div className="img-container"> */}
            {/* <FontAwesomeIcon icon={faPlus} className="icon-plus" /> */}
            {/* <img src={item.image} alt="sofa" className="display-product" /> */}
            {/* </div>  */}
            <Link to={"/product"} className="img-container">
              <img src={item.image} alt={item.title} className="display-product" />
            </Link>
            <h2>{item.title}</h2>
            <p>{item.price}</p>
          </div>
        ))}
      </Slider>
      <Link to={"/product"} className="btn-shop-prod-list">
        Shop Now
      </Link>
    </div>
  );
}

export default DisplayProduct;
