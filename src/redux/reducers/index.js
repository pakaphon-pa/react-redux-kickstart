import { combineReducers } from "redux";
import { productReducer, selectedProductReduces } from "./productReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReduces,
});

export default reducers;
