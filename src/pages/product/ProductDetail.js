import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOneProduct } from "../../request/products";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.product);
  const { productId } = useParams();
  const dispatch = useDispatch();

  async function requestOneProduct(productId) {
    const response = await getOneProduct(productId);
    console.log(response);
    dispatch(selectedProduct(response.data));
  }

  useEffect(async () => {
    await requestOneProduct(productId);
    return async () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div> ...Loading </div>
      ) : (
        <h1>{product.title}</h1>
      )}
    </div>
  );
};

export default ProductDetail;
