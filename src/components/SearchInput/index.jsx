import React, { useState } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { searchUser } from "../../actions/search";
const { Search } = Input;

const SearchInput = () => {
  const dispatch = useDispatch();
  const handleSetSearch = value => {
    dispatch(searchUser(value));
  };

  return (
    <Search
      placeholder="Please enter your text here and click enter button"
      enterButton="Search"
      size="large"
      onSearch={value => handleSetSearch(value)}
    />
  );
};

export default SearchInput;
