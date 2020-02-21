import {
  TOGGLE_FORM,
  TOGGLE_NEW_FORM,
  ADD_NEW_ACCOUNT,
  CHANGE_ACCOUNT,
  DELETE_ACCOUNT,
  FETCH_ACCOUNTS,
  FETCH_ACCOUNTS_SUCCESS,
  FETCH_ACCOUNTS_FAILED
} from "../constants";

import getAllAccounts from "../api/accountsApi";

export function fetchingAccountsAPI() {
  return async dispatch => {
    dispatch(fetchAccounts());
    try {
      const accounts = await getAllAccounts();
      dispatch(fetchAccountsSuccess(accounts));
    } catch (error) {
      dispatch(fetchAccountsError(error));
    }
  };
}

export const fetchAccounts = () => ({
  type: FETCH_ACCOUNTS
});

export const fetchAccountsSuccess = accounts => ({
  type: FETCH_ACCOUNTS_SUCCESS,
  payload: accounts
});

export const fetchAccountsError = error => ({
  type: FETCH_ACCOUNTS_FAILED,
  payload: error
});

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
