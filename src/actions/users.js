export const ADD_NEW_USER = "user/ADD_NEW_USER";
export const CHANGE_USER = "user/CHANGE_USER";
export const DELETE_USER = "user/DELETE_USER";

export const TOGGLE_NEW_FORM = "user/TOGGLE_NEW_FORM";
export const TOGGLE_FORM = "user/TOGGLE_FORM";

export const toggleNewForm = (isShow = false) => ({
  type: TOGGLE_NEW_FORM,
  payload: isShow
});

export const toggleForm = id => ({
  type: TOGGLE_FORM,
  payload: id
});

export const addNewUser = user => ({
  type: ADD_NEW_USER,
  payload: user
});

export const changeUser = user => ({
  type: CHANGE_USER,
  payload: user
});

export const deleteUser = id => ({
  type: DELETE_USER,
  payload: id
});
