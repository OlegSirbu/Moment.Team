import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Col, Row, Icon } from "antd";
import "./style.css";

import {
  addNewAccount,
  changeAccount,
  deleteAccount,
  toggleNewForm,
  toggleForm,
  fetchingAccountsAPI
} from "actions/account";

import { getTextByItemForRow, getNextId, sortUsersByAccNumber } from "helpers";

import FormUser from "components/Form";

const ListAccount = () => {
  const dispatch = useDispatch();
  const accountStore = useSelector(state => state.account);
  const searchValue = useSelector(state => state.search);

  useEffect(() => {
    dispatch(fetchingAccountsAPI());
  }, []);

  const filterAccountsBySearch = usersStore =>
    usersStore.filter(
      ({ accNum = "", accName = "", isNew }) =>
        isNew || // need to check if search return empty array and user click to add new account
        accNum.toString().includes(searchValue) ||
        accName.toString().includes(searchValue)
    );

  const handleDeleteAcc = id => {
    dispatch(deleteAccount(id));
  };

  const handleUpdateAcc = item => {
    dispatch(changeAccount(item));
  };

  const handleCloseForm = id => {
    if (!id) {
      dispatch(toggleNewForm());
    } else {
      dispatch(toggleForm(id));
    }
  };

  const handleAddNewAcc = (id = getNextId(accountStore.data), newUser) => {
    dispatch(addNewAccount({ ...newUser, id }));
  };

  const renderListHeader = (
    <Row type="flex" align="middle">
      <Col span={18}>
        <span>Accounts</span>
      </Col>
      <Col span={6} style={{ textAlign: "right" }}>
        <Button
          style={{ textAlign: "right" }}
          type="link"
          onClick={() => dispatch(toggleNewForm(true))}
        >
          <Icon type="plus" /> New account
        </Button>
      </Col>
    </Row>
  );

  const renderRowItem = ({ isExisting, isNew, ...item }) =>
    isNew || isExisting ? ( // check if have some key show form
      <List.Item>
        {
          <FormUser
            onClose={handleCloseForm}
            onSave={isNew ? handleAddNewAcc : handleUpdateAcc}
            onRemove={!isNew && handleDeleteAcc}
            data={!isNew && item}
          />
        }
      </List.Item>
    ) : (
      // show row with data
      <List.Item
        actions={[
          <Button
            type="link"
            icon="form"
            onClick={() => dispatch(toggleForm(item.id))}
          >
            Edit
          </Button>
        ]}
      >
        {getTextByItemForRow(item)}
      </List.Item>
    );

  if (accountStore.loading) return <div>Loading...</div>;
  if (accountStore.error) return <h1>We have some error!</h1>;

  // sorted array of accounts and filter by search
  const dataAccounts = sortUsersByAccNumber(
    searchValue !== ""
      ? filterAccountsBySearch(accountStore.data)
      : accountStore.data
  );
  return (
    <List
      className="acc-list"
      header={renderListHeader}
      bordered
      dataSource={dataAccounts}
      renderItem={renderRowItem}
    />
  );
};

export default ListAccount;
