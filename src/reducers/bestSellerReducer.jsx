import { Data } from "../data";
const initialState = {
  bestSellers: Data.bestSellers,
};

export default function bestSellerReducer(state = initialState, action) {
  switch (action.type) {
  
    default:
      return state;
  }
}
