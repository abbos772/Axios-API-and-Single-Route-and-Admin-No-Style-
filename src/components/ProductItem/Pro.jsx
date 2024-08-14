import React from "react";
import { Link } from "react-router-dom";
const Pro = ({ id, title, images, category }) => {
  return (
    <div>
      <div key={id} className="cart">
        <div className="cart_img">
          <Link to={`/product/${id}`}>
            <img src={images[0]} alt="" />
          </Link>
        </div>
        <div className="cart_text">
          <h3>{title.slice(0, 20)}...</h3>
          <p>{category}</p>
          <button>Buy now</button>
        </div>
      </div>
    </div>
  );
};

export default Pro;
