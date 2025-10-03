import { Data } from "../data";

const initialState = {
features : Data.featuredProducts
};
export default function featuredReducer(state = initialState, action) {
  switch (action.type) {
       
    default:
      return state;
  }
}