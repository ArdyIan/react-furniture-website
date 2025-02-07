// isi konten di tiap carousel slidernya total kaykanya ada 10 produk

import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";
import "./productCart.css";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const { id, title, price, image } = product;

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };

  return (
    <div className="product-cart">
      <Link to={`/product/${product.slug}`}>
        <img src={image} alt={title} className="product-image" />
      </Link>
      <h3 className="product-title">{title}</h3>
      <div className="product-info">
        <p>
          $<span className="product-price">{price}</span>
        </p>
        <button className="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
  
};

export default ProductCart;
