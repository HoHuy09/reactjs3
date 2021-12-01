import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { read } from "../../api/productAPI";

const ProductDetail = (props) => {
  const { id } = useParams(); // { id: }
  const [product, setProduct] = useState({});

  useEffect(() => {
    read(id).then((response) => setProduct(response.data));
  }, [id]);

  return (
    product && (
      <div>
        <h2>Tên Sản Phẩm: {product.name}</h2>

        <img src={product.image} alt={product.name} style={{with:"600px",height:"300px"}} />
        <h3>Mô tả:{product.description}</h3>
        <div class="product-price">
          {product.price} vnđ
        </div>
        <div class="product-btn">
          <a href="shopcart" class="btn btn-extra-small btn-dark-border  "><i class="fa fa-shopping-cart"></i> Add to
            cart</a>
        </div>
      </div>

    )
  );
};
export default ProductDetail;