import { setCart } from "../../reducers/shoppingCartReducer";

export function decreaseProductInCartThunk(productId) {
  return (dispatch, getState) => {
    const currentCart = getState().shoppingCart.cart;
    const newCart = currentCart.map(item =>
      item.id === productId
        ? { ...item, quantity: (item.quantity || 1) - 1 }
        : item
    );
    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
}