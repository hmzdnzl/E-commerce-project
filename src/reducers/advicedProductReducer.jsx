import { Data } from "../data";

const initialState = {
  advicedProducts: Data.advicedProduct,
};

export default function advicedProductReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
