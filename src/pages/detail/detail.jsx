// halaman dari detail produk ketika memilih salah satu dari carousel slidernya

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../product";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";
import { useNavigate } from "react-router-dom";
import "./detail.css";
import { Link } from "react-router-dom";

const Detail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // useEffect(() => {
  //   const findDetail = products.filter((product) => product.slug === slug);
  //   if (findDetail.length > 0) {
  //     setDetail(findDetail[0]);
  //   } else {
  //     window.location.href = "/";
  //   }
  // }, [slug]);

  useEffect(() => {
    const findDetail = products.find((product) => product.slug === slug);
    if (findDetail) {
      setDetail(findDetail);
    } else {
      navigate("/"); // Menggunakan React Router, bukan `window.location.href`
    }
  }, [slug, navigate]);

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };
  const handlePlusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: detail.id,
        quantity: quantity,
      })
    );
  };

  if (!detail) return <p>Loading...</p>;

  return (
    <div>
      <ul className="prod-list-header">
        <Link to="/" className="home-click-prod-list">
          FurniShop
        </Link>
        <h2 className="heading-title">PRODUCT DETAIL</h2>
      </ul>
      <div className="product-detail-container">
        <div>
          <img src={detail.image} alt={detail.title} className="product-image-detail" />
        </div>

        <div className="product-info-section">
          <h1 className="product-title-detail">{detail.title}</h1>
          <p className="product-price-detail">${detail.price}</p>
          <p className="product-description">{detail.description}</p>

          {/* Bagian Quantity Selector */}
          <div className="quantity-selector">
            <div className="quantity-control">
              <button className="quantity-button" onClick={handleMinusQuantity}>
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button className="quantity-button" onClick={handlePlusQuantity}>
                +
              </button>
            </div>

            {/* Tombol Add to Cart tetap seperti semula */}
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
