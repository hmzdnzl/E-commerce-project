const SET_ADDRESS_LIST = "SET_ADDRESS_LIST";
const SET_ADDRESS_FETCH_STATE = "SET_ADDRESS_FETCH_STATE";

const initialState = { 
  addresses: [], 
  fetchState: "IDLE",
   error: null 
};
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS_LIST:
      return { ...state, addresses: action.payload };
    case SET_ADDRESS_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
}
export function setAddressList(addresses) {
  return { type: SET_ADDRESS_LIST, payload: addresses };
}
export function setAddressFetchState(fetchState) {
  return { type: SET_ADDRESS_FETCH_STATE, payload: fetchState };
}