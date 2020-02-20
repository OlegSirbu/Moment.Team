import { SEARCH_VALUE } from "../constants";
import store from "../constants/store";

export default (state = store.searchValue, action) => {
  switch (action.type) {
    case SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
};
