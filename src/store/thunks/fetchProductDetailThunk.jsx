import axiosInstance from "../../api/axiosInstance";

export function fetchProductDetailThunk(productId) {
  return async function(dispatch) {
    dispatch({ type: "SET_PRODUCT_DETAIL_LOADING" });
    try {
      const response = await axiosInstance.get(`/products/${productId}`);
      dispatch({ type: "SET_PRODUCT_DETAIL", payload: response.data });
    } catch (error) {
      dispatch({ type: "SET_PRODUCT_DETAIL_ERROR", payload: error });
    }
  };
}
