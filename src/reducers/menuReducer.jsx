import { TOGGLE_MENU, OPEN_MENU, CLOSE_MENU } from '../actions/action';

const initialState = { open: false };

export default function menuReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return { ...state, open: !state.open };
    case OPEN_MENU :
      return { ...state, open: true };
    case CLOSE_MENU:
      return { ...state, open: false };
    default:
      return state;
  }
}