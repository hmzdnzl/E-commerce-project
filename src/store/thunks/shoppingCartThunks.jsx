import axiosInstance from "../../api/axiosInstance";
import { setCart } from "../../reducers/shoppingCartReducer";

export function addToCartThunk(product) {
  return async function (dispatch, getState) {
    const currentCart = getState().shoppingCart.cart;

    const existing = currentCart.find((item) => item.id === product.id);
    let newCart;
    if (existing) {
      newCart = currentCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      );
    } else {
      newCart = [...currentCart, { ...product, quantity: 1 }];
    }
    dispatch(setCart(newCart));
    localStorage.setItem("cart", JSON.stringify(newCart));
  };
}
