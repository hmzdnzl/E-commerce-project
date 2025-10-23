const initialState = {
  categories: [],
  productList: [],
  total: 0,
  limit: 25,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED"
};

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_FETCH_STATE = "SET_FETCH_STATE";

export function setCategories(categories) {
  return { type: SET_CATEGORIES, payload: categories };
}
export function setProductList(productList) {
  return { type: SET_PRODUCT_LIST, payload: productList };
}
export function setTotal(total) {
  return { type: SET_TOTAL, payload: total };
}
export function setLimit(limit) {
  return { type: SET_LIMIT, payload: limit };
}
export function setOffset(offset) {
  return { type: SET_OFFSET, payload: offset };
}
export function setFilter(filter) {
  return { type: SET_FILTER, payload: filter };
}
export function setFetchState(fetchState) {
  return { type: SET_FETCH_STATE, payload: fetchState };
}

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
}