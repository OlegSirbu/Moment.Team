import React from "react";
import { Input, Icon } from "antd";
import { useDispatch } from "react-redux";
import { searchValueAct } from "../../actions/search";

const SearchInput = () => {
  const dispatch = useDispatch();
  const handleSetSearch = value => {
    dispatch(searchValueAct(value));
  };

  return (
    <Input.Search
      placeholder="Please type here Account name or Account number"
      size="large"
      enterButton
      onChange={e => handleSetSearch(e.target.value)}
    />
  );
};

export default SearchInput;
