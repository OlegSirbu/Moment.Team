import { SEARCH_VALUE } from "../constants";

export const searchValueAct = value => ({
  type: SEARCH_VALUE,
  payload: value
});
