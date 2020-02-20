import { SEARCH_USER } from "../actions/search";
import store from "../constants/store";

export default (state = store.searchValue, action) => {
  switch (action.type) {
    case SEARCH_USER:
      return action.payload;
    default:
      return state;
  }
};
