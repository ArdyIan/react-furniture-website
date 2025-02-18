import React from "react";
import "./category.css";
import Slider from "react-perfect-slider";
import sofa from "../../assets/sofa.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../../constants";

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

      <div className="swiper-container">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          freeMode={true}
          //pagination digunakan untuk menampilkan navigasi titik dibawah carousel slidernya
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode]}
          // modules={[FreeMode, Pagination]} //pagination digunakan untuk menampilkan navigasi titik dibawah carousel slidernya
        >
           {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="card-overlay" />
              <div className="card-content">
                <h1>{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
