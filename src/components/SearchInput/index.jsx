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
    <Input
      placeholder="Please type here Account name or Account number"
      size="large"
      addonAfter={<Icon type="search" />}
      onChange={e => handleSetSearch(e.target.value)}
    />
  );
};

export default SearchInput;
