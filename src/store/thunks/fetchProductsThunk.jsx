import  axiosInstance  from "../../api/axiosInstance";



export function fetchShopProductsThunk() {
  return async function(dispatch) {
    const response = await axiosInstance.get("/products");
    // API'dan dönen veri { products: [...] } ise:
    const products = response.data.products || response.data;
    dispatch({ type: "SET_SHOP_PRODUCTS", payload: products });
  };
}



// Eski kod kaldırıldı, sadece thunk export ediliyor.