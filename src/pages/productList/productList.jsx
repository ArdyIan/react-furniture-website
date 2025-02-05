// mengatur tampilan dari isi product list

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCart from "../../components/productCart/productCart";
import { products } from "../../product";
import CartTab from "../../components/cartTab/cartTab";
import Slider from "react-slick";
import iconCart from "../../assets/iconCart.png";
import { toggleStatusTab } from "../../stores/cart";
import "./productList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);
  const isCartOpen = useSelector((store) => store.cart.statusTab); // Nama variabel diperbaiki
  const dispatch = useDispatch();

  useEffect(() => {
    let total = carts.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(total);
  }, [carts]);

  const handleOpenTabCart = () => {
    dispatch(toggleStatusTab()); // Pastikan ini dipanggil dengan benar
    console.log("Opening Cart Tab...");
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 4,
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
      <header className="header-product-list">
        {/* <div className="home-click">Home</div> */}
        {/* <div className={`home-click ${isCartOpen ? "cart-opened" : ""}`}>FurniShop</div> */}
        <Link to="/" className={`home-click ${isCartOpen ? "cart-opened" : ""}`}>
          FurniShop
        </Link>
        <div className={`cart-tab ${isCartOpen ? "cart-opened" : ""}`} onClick={handleOpenTabCart}>
          <img src={iconCart} alt="cart icon" className="cart-img" />
          <span className="cart-total-item">{totalQuantity}</span>
        </div>
      </header>

      
      <div className={`product-container ${isCartOpen ? "cart-opened" : ""}`}>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id}>
              
              {/* navigate ke halaman detail tapi tidak bisa diatur arah cursor clicknya */}
              {/* <Link to={`/product/${product.slug}`}> */}
                <ProductCart product={product} />
              {/* </Link> */}
            </div>
          ))}
        </Slider>
      </div>

      <CartTab />
    </div>
  );
};

export default ProductList;
