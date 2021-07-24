import { ActionTypes } from "../contants/action-types";

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      // Check the item data from the products array

      // Check if Item is in cart already
      return {};
    case ActionTypes.REMOVE_FROM_CART:
      // filter remove item
      return {};
    case ActionTypes.ADJUST_QTY:
      return {};
    case ActionTypes.LOAD_CURRENT_ITEM:
      return {};
    default:
      return state;
  }
};
