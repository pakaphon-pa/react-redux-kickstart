import axios from "axios";

export const fetchProducts = async () => {
  try {
    return axios.get("https://fakestoreapi.com/products");
  } catch (error) {
    console.log("Error", error);
  }
};

export const getOneProduct = async (productId) => {
  try {
    return axios.get(`https://fakestoreapi.com/products/${productId}`);
  } catch (error) {
    console.log("Error", error);
  }
};
