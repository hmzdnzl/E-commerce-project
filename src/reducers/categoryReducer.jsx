import {Data} from "../data";

const initialState = {
 categories : Data.categorySection
};
export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
       
    default:
      return state;
  }
}