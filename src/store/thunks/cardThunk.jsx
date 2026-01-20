import axiosInstance from "../../api/axiosInstance";
import {
  setCardList,
  setCardFetchState
} from "../../reducers/cardReducer";

export const fetchCards = () => async (dispatch) => {
  try {
    dispatch(setCardFetchState("FETCHING"));
    const res = await axiosInstance.get("/user/card");
    console.log("Kartlar response:", res.data); // <-- Buraya ekle
    dispatch(setCardList(res.data || []));
    dispatch(setCardFetchState("FULFILLED"));
  } catch (err) {
    dispatch(setCardList([]));
    dispatch(setCardFetchState("FAILED"));
    console.log(err);
  }

}

  export const createCard = (payload) => async (dispatch) => {
 
  await axiosInstance.post("/user/card", payload);
  
  return dispatch(fetchCards())
};