import { Data } from "../data";

const initialState = {
  contactEmail: Data.contactEmail,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
   
    default:
      return state;
  }
};
