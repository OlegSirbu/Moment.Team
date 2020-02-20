import React, { useState } from "react";
import { Input } from "antd";

const SearchInput = () => {
  const [input, setInput] = useState("");
  return <Input value={input} onChange={e => setInput(e.target.value)} />;
};

export default SearchInput;
