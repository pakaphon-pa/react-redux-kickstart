import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../request/products";
import { setProducts } from "../../redux/actions/productActions";
import Product from "../../component/products/Product";
const ProductList = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  async function getProducts() {
    const response = await fetchProducts();
    dispatch(setProducts(response.data));
  }

  useEffect(async () => {
    getProducts();
  }, []);

  return (
    <div>
      <Product />
    </div>
  );
};

export default ProductList;
