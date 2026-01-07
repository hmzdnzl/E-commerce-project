import  axiosInstance  from "../../api/axiosInstance";


export function fetchAddressThunk() {
  return async function(dispatch) {
    try {
    const response = await axiosInstance.get("/user/address");
    console.log("Adresler:", response.data);
    dispatch(setAddresses(response.data));
    } catch (error) {
       dispatch(setAddressError(error.message));
    }
  };
}

const SET_ADDRESSES = "SET_ADDRESSES";
const initialState = { addresses: [] };
export function setAddresses(addresses) {
  return { type: SET_ADDRESSES, payload: addresses };
}
export default function addressReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ADDRESSES":
      return { ...state, addresses: action.payload };
    default:
      return state;
  }

}


  const SET_ADDRESS_ERROR = "SET_ADDRESS_ERROR";
export function setAddressError(error) {
  return { type: SET_ADDRESS_ERROR, payload: error };
}