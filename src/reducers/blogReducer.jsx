import { Data } from "../data";
const initialState = {
  blogPage: Data.blogPage,
};
export default function BlogReducer(state = initialState, action) {

  switch (action.type) {
  
    default:
      return state;
  }
}
