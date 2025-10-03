import { Data } from "../data";

const initialState = {
  slides: Data.productSlider,
};

export default function productSliderReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
