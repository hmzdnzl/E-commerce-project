import { Data } from "../data";

const initialState = {
  products: Data.productCards,
};

export default function productCardsReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
