import {Data} from '../data';

const initialState = {
  shopProducts: Data.shopProducts,

};
export const shopProductsReducer = (state = initialState, action) => {
  switch (action.type) {
      default:
        return state;
    }
    };