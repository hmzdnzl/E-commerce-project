import { Data } from "../data";

const initialState = {
  brands: Data.brands,
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default brandsReducer;
