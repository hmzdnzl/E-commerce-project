import axiosInstance from "../../api/axiosInstance";

export function fetchCategoriesThunk() {
  return async function (dispatch) {
    const response = await axiosInstance.get("/categories");
    dispatch(setCategories(response.data));
  };
}

const initialState = { categories: [] };
export function setCategories(categories) {
  return { type: "SET_CATEGORIES", payload: categories };
}
export default function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_CATEGORIES":
      return { ...state, categories: action.payload };
    default:
      return state;
  }
}
