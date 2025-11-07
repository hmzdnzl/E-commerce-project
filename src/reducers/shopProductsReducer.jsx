
const initialState = {
  shopProducts: [],
};

export const shopProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOP_PRODUCTS':
      return {
        ...state,
        shopProducts: action.payload
      };
    default:
      return state;
  }
};
