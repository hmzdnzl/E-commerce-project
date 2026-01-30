import axiosInstance from "../../api/axiosInstance";
import {
  setAddressList,
  setAddressFetchState
} from "../../reducers/addressReducer";

export const fetchAddresses = () => async (dispatch) => {
  try {
    dispatch(setAddressFetchState("FETCHING"));
    const res = await axiosInstance.get("/user/address");
    dispatch(setAddressList(res.data || []));
    dispatch(setAddressFetchState("FULFILLED"));
  } catch (err) {
    dispatch(setAddressList([]));
    dispatch(setAddressFetchState("FAILED"));
  }
};

