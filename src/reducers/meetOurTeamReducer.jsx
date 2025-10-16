import { Data } from "../data";

const initialState = {
  meetTeam: Data.meetTeam,
};

export default function MeetOurTeamReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
