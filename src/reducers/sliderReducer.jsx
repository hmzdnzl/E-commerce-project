import {Data} from "../data";

const initialState = {
  slides: Data.sliderSection,
};
export default function sliderReducer(state = initialState, action) {
  switch (action.type) {
   
    default:
      return state;
  }
}