import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "../../api/Api";
import Pro from "../ProductItem/Pro";

const Product = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/products")
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  let Products = data?.map((el) => (
    <Pro key={el.id} {...el} />
    // <div key={el.id} className="cart">
    //   <div className="cart_img">
    //     <img src={el.images[0]} alt="" />
    //   </div>
    //   <div className="cart_text">
    //     <h3>{el.title}</h3>
    //     <p>{el.category}</p>
    //     <button>Buy now</button>
    //   </div>
    // </div>
  ));

  return (
    <div className="container">
      <div className="wrapper">{Products}</div>
    </div>
  );
};

export default Product;
