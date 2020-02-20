import {
  TOGGLE_FORM,
  TOGGLE_NEW_FORM,
  ADD_NEW_ACCOUNT,
  CHANGE_ACCOUNT,
  DELETE_ACCOUNT
} from "../constants";

export const toggleNewForm = (isShow = false) => ({
  type: TOGGLE_NEW_FORM,
  payload: isShow
});

export const toggleForm = id => ({
  type: TOGGLE_FORM,
  payload: id
});

export const addNewAccount = data => ({
  type: ADD_NEW_ACCOUNT,
  payload: data
});

export const changeAccount = data => ({
  type: CHANGE_ACCOUNT,
  payload: data
});

export const deleteAccount = id => ({
  type: DELETE_ACCOUNT,
  payload: id
});
