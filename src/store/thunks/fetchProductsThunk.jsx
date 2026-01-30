import axiosInstance from "../../api/axiosInstance";

export function fetchShopProductsThunk(categoryId) {
  return async function (dispatch) {
    dispatch({ type: "SET_SHOP_PRODUCTS_LOADING" });
    const url = categoryId
      ? `/products?category_id=${categoryId}&limit=1000`
      : `/products?limit=1000`;
    const response = await axiosInstance.get(url);
    let filteredProducts = response.data.products;
    if (categoryId) {
      filteredProducts = filteredProducts.filter(
        (p) => p.category_id === Number(categoryId),
      );
    }
    const filteredPayload = {
      ...response.data,
      products: filteredProducts,
      total: filteredProducts.length,
    };

    dispatch({ type: "SET_SHOP_PRODUCTS", payload: filteredPayload });
  };
}
