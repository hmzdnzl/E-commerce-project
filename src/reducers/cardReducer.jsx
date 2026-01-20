const SET_CARD_LIST = "SET_CARD_LIST";
const SET_CARD_FETCH_STATE = "SET_CARD_FETCH_STATE";
const ADD_CARD = "ADD_CARD";
const UPDATE_CARD = "UPDATE_CARD";
const DELETE_CARD = "DELETE_CARD";

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
    case ADD_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    case UPDATE_CARD:
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload.id ? action.payload : card
        ),
      };
    case DELETE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload),
      };
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
export function addCard(card) {
  return { type: ADD_CARD, payload: card };
}
export function updateCard(card) {
  return { type: UPDATE_CARD, payload: card };
}
export function deleteCard(cardId) {
  return { type: DELETE_CARD, payload: cardId };
}