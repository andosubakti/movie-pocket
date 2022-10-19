import React from "react";
import { Input } from "antd";
const { Search } = Input;

const SearchComponent = (props) => {
  const { placeholder, enterButton, size, onSearch } = props;

  const onSearchHandler = (value) => {
    onSearch(value);
  };
  return (
    <Search
      placeholder={placeholder}
      enterButton={enterButton}
      size={size ? size : "large"}
      onSearch={(value) => {
        if (value) {
          onSearchHandler(value);
        }
      }}
      className="max-w-xl px-4"
    />
  );
};

export default SearchComponent;
