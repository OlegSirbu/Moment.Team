import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Col, Row } from "antd";
import "./style.css";

import {
  addNewAccount,
  changeAccount,
  deleteAccount,
  toggleNewForm,
  toggleForm
} from "../../actions/account";

import {
  getTextByItemForRow,
  getNextId,
  sortUsersByAccNumber
} from "../../helpers";

import FormUser from "../../components/Form";

const ListAccount = () => {
  const dispatch = useDispatch();
  const accountStore = useSelector(state => state.account);
  const searchValue = useSelector(state => state.search);

  const filterAccountsBySearch = usersStore =>
    usersStore.filter(
      ({ accNum, accName }) =>
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

  const handleAddNewAcc = (id = getNextId(accountStore), newUser) => {
    dispatch(addNewAccount({ ...newUser, id }));
  };

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
          + New account
        </Button>
      </Col>
    </Row>
  );

  // sorted array of accounts and filter by search
  const dataAccounts = sortUsersByAccNumber(
    searchValue !== "" ? filterAccountsBySearch(accountStore) : accountStore
  );
  return (
    <React.Fragment>
      <List
        className="acc-list"
        header={renderListHeader}
        bordered
        dataSource={dataAccounts}
        renderItem={renderRowItem}
      />
    </React.Fragment>
  );
};

export default ListAccount;
