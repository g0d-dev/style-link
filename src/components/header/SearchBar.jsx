import React, { useState } from "react";
import BasicInput from "../UI/BasicInput";
import { BsSearch } from "react-icons/bs";
import { tags } from "../../mocks/tags";
import Dropdown from "./Dropdown";

function SearchBar() {
  const [searchResult, setSearchResult] = useState([]);

  const onChangeHandler = (e) => {
    if (e.target.value.length === 0) return setSearchResult([]);
    setSearchResult(tags.filter((tag) => tag.includes(e.target.value)));
  };

  return (
    <div className="flex flex-wrap items-center justify-center w-full text-2xl">
      <BasicInput
        placeHolderText="검색할 태그를 입력해 주세요"
        classname="w-2/3 h-10 pl-4 mr-3 focus:placeholder:text-white"
        onChangeHandler={onChangeHandler}
      />
      <BsSearch />
      <Dropdown searchResult={searchResult} />
    </div>
  );
}

export default SearchBar;
