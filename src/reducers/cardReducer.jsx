const SET_CARD_LIST = "SET_CARD_LIST";
const SET_CARD_FETCH_STATE = "SET_CARD_FETCH_STATE";

const initialState = { 
  cards: [], 
  fetchState: "IDLE",
   error: null 
};
export default function cardReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CARD_LIST:
      return { ...state, cards: action.payload };
    case SET_CARD_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    default:
      return state;
  }
}
export function setCardList(cards) {
  return { type: SET_CARD_LIST, payload: cards };
}
export function setCardFetchState(fetchState) {
  return { type: SET_CARD_FETCH_STATE, payload: fetchState };
}