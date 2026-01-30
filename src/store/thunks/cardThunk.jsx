import axiosInstance from "../../api/axiosInstance";
import axios from "axios";
import { setCardList, setCardFetchState } from "../../reducers/cardReducer";

export const fetchCards = () => async (dispatch) => {
  try {
    dispatch(setCardFetchState("FETCHING"));
    const res = await axiosInstance.get("/user/card");
    dispatch(setCardList(res.data || []));
    dispatch(setCardFetchState("FULFILLED"));
  } catch (err) {
    dispatch(setCardList([]));
    dispatch(setCardFetchState("FAILED"));
  }
};

export const createCard = (payload) => async (dispatch) => {
  const token = localStorage.getItem("token");
  await axios.post(
    "https://workintech-fe-ecommerce.onrender.com/user/card",
    payload,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return dispatch(fetchCards());
};

export const updateCard = (payload) => async (dispatch) => {
  const token = localStorage.getItem("token");
  await axios.put(
    "https://workintech-fe-ecommerce.onrender.com/user/card",
    payload,
    {
      headers: {
        Authorization: token,
      },
    },
  );

  return dispatch(fetchCards());
};
