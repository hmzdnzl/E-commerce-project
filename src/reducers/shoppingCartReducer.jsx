const initialState = {
  cart: [],
  payment: {},
  address: {}
};

export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";

export function setCart(cart) {
  return { type: SET_CART, payload: cart };
}
export function setPayment(payment) {
  return { type: SET_PAYMENT, payload: payment };
}
export function setAddress(address) {
  return { type: SET_ADDRESS, payload: address };
}

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
}