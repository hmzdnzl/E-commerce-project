import { Data } from "../data";

const initialState = Data.aboutPage;

export default function aboutReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }}