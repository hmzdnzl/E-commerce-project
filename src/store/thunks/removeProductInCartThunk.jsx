import { setCart } from "../../reducers/shoppingCartReducer";

export function removeProductInCartThunk(productId) {
  return (dispatch, getState) => {
    const currentCart = getState().shoppingCart.cart;
    const newCart = currentCart.filter((item) => item.id !== productId);
    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
}
