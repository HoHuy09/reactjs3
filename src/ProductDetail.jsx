import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "./api/productAPI";

const ProductDetail = (props) => {
  const { id } = useParams(); // { id: }
  const [product, setProduct] = useState({});

  useEffect(() => {
    read(id).then((response) => setProduct(response.data));
  }, [id]);

  return (
    product && (
      <div>
        <h2>{product.name}</h2>
        <img src={product.avatar} alt={product.name} />
      </div>
    )
  );
};
export default ProductDetail;