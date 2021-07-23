import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get } from "../../utils/utilityFunc";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const id = get(product, "id", " ");
    const title = get(product, "title", " ");
    const image = get(product, "image", " ");
    const price = get(product, "price", " ");
    const category = get(product, "category", " ");
    return (
      <div key={id}>
        <Link to={`/products/${id}`}>
          <img src={image} />
          <div>{title}</div>
          <div>{price}</div>
          <div>$ {category}</div>
        </Link>
      </div>
    );
  });

  return <> {renderList} </>;
};

export default Product;
