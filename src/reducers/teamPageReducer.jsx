import { Data } from "../data";

const initialState = Data.teamPage;

export default function teamPageReducer( state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }}