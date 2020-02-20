import React from "react";
import UserList from "../UserList";
import SearchInput from "../../components/SearchInput";

const App = () => (
  <div className="app-main-style">
    <SearchInput />
    <UserList />
  </div>
);

export default App;
