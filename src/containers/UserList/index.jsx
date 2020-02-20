import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List, Button, Col, Row } from "antd";
import "./style.css";
import FormUser from "../Form";
import { getTextByItemForRow } from "../../helpers";

const UserList = () => {
  const sortUsersByAccNumber = users =>
    users.sort((a, b) => a.accNum - b.accNum);

  const [usersData, setUsersData] = useState(
    useSelector(state => state.users.users)
  );
  const dispatch = useDispatch();

  const handlerAddNewUser = () => {
    setUsersData([{ isNew: true }, ...usersData]);
  };

  const handleRemoveUser = id => {
    setUsersData(usersData.filter(user => user.id !== id));
  };

  const handleShowEditUserForm = item => {
    setUsersData(
      usersData.map(user => {
        if (user.id === item.id) {
          return {
            ...user,
            isExisting: !user.isExisting
          };
        }
        return user;
      })
    );
  };

  const handleUpdateUser = (id, item) => {
    const newUser = usersData.map(user => {
      if (user.id === id) {
        return {
          ...user,
          isExisting: !user.isExisting,
          ...item
        };
      }
      return user;
    });
    setUsersData(newUser);
  };

  const handleCloseForm = id => {
    if (!id) {
      const newUsers = usersData.shift();
      setUsersData(newUsers);
    }
    setUsersData(
      usersData.map(user => {
        if (user.id === id) {
          return { ...user, isExisting: false };
        }
        return user;
      })
    );
  };

  const handleCreateNewUser = newUser => {
    const getNextId = () =>
      Math.max.apply(
        Math,
        usersData.map(function(o) {
          return o.id;
        })
      ) + 1; // get max id value and iterate it + 1;

    const newUsers = [...usersData, { ...newUser, id: getNextId() }];
    setUsersData(newUsers);
  };

  const renderRowItem = ({ isExisting, isNew, ...item }) =>
    isNew || isExisting ? (
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
      <List.Item
        actions={[
          <Button
            type="link"
            icon="form"
            onClick={() => handleShowEditUserForm(item)}
          >
            Edit
          </Button>
        ]}
      >
        {getTextByItemForRow(item)}
      </List.Item>
    );

  return (
    <List
      className="user-list"
      header={
        <Row type="flex" align="middle">
          <Col span={18}>
            <span>Accounts</span>
          </Col>
          <Col span={6} style={{ textAlign: "right" }}>
            <Button
              style={{ textAlign: "right" }}
              type="link"
              onClick={handlerAddNewUser}
            >
              + New account
            </Button>
          </Col>
        </Row>
      }
      bordered
      dataSource={sortUsersByAccNumber(usersData)}
      renderItem={renderRowItem}
    />
  );
};

export default UserList;
