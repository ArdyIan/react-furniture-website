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
              {/* <SwiperSlide key={item.title} style={{ border: "1px solid red" }}> */}

              <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[500px] lg:w-[250px] overflow-hidden cursor-pointer">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.backgroundImage})` }} />
                <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center z-10">
                {/* <div className="relative flex flex-col gap-3"> */}
                  {/* <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" /> */}
                  <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                  {/* <p className="lg:text-[18px]">{item.content} </p> */}
                </div>
                {/* <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" /> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
