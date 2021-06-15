import React, { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("tap here");

  const handleChange = (event) => {
    setSearchValue(event.target.searchValue);
  };

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleChange} />
    </div>
  );
};

export default Search;
