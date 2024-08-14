import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../api/Api";
import Loading from "../../components/Loading/Loading";
const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!product) {
    return <Loading />;
  }

  return (
    <div>
      <h2>{product?.title}</h2>
      <img src={product?.images[0]} width={200} alt="" />
    </div>
  );
};

export default Single;
