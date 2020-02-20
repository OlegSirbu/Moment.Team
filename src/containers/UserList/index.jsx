import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Button, Col, Row } from "antd";
import "./style.css";

import {
  deleteUser,
  addNewUser,
  changeUser,
  toggleNewForm,
  toggleForm
} from "../../actions/users";

import {
  getTextByItemForRow,
  getNextId,
  sortUsersByAccNumber
} from "../../helpers";

import FormUser from "../../components/Form";

const UserList = () => {
  const dispatch = useDispatch();
  const usersStore = useSelector(state => state.users);
  const searchValue = useSelector(state => state.search);

  const filterUsersBySearch = usersStore =>
    usersStore.filter(
      user =>
        user.accNum.toString().includes(searchValue) ||
        user.accName.toString().includes(searchValue)
    );

  const handleRemoveUser = id => {
    dispatch(deleteUser(id));
  };

  const handleUpdateUser = (id, item) => {
    dispatch(changeUser(id, item));
  };

  const handleCloseForm = id => {
    if (!id) {
      dispatch(toggleNewForm());
    } else {
      dispatch(toggleForm(id));
    }
  };

  const handleCreateNewUser = (id = getNextId(usersStore), newUser) => {
    dispatch(addNewUser({ ...newUser, id }));
  };

  const renderRowItem = ({ isExisting, isNew, ...item }) =>
    isNew || isExisting ? ( // check if have some key show form
      <List.Item>
        {
          <FormUser
            onClose={handleCloseForm}
            onSave={isNew ? handleCreateNewUser : handleUpdateUser}
            onRemove={!isNew && handleRemoveUser}
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

  // sorted array of users and filter by search
  const dataUsers = sortUsersByAccNumber(
    searchValue !== "" ? filterUsersBySearch(usersStore) : usersStore
  );
  return (
    <React.Fragment>
      <List
        className="user-list"
        header={renderListHeader}
        bordered
        dataSource={dataUsers}
        renderItem={renderRowItem}
      />
    </React.Fragment>
  );
};

export default UserList;
