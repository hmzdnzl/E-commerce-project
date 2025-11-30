

const initialState = {
  shopProducts: [],
  total: 0,
  loading: false,
};

export const shopProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SHOP_PRODUCTS':
      return {
        ...state,
        shopProducts: action.payload.products || action.payload,
        total: action.payload.total || 0,
        loading: false
      };
    case 'SET_SHOP_PRODUCTS_LOADING':
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
