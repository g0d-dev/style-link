import React from "react";
import BasicInput from "../UI/BasicInput";
import { BsSearch } from "react-icons/bs";

function SearchBar() {
  return (
    <div className="flex items-center text-2xl">
      <BasicInput
        placeHolderText="검색할 태그를 입력해 주세요"
        classname="h-10 pl-4 mr-3 w-104 ml-44 focus:placeholder:text-white"
      />
      <BsSearch />
    </div>
  );
}

export default SearchBar;
