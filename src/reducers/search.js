import { SEARCH_VALUE } from "../constants";
import initialState from "./initialState";

export default (state = initialState.searchValue, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
};
