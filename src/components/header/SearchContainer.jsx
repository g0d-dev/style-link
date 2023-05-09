import React from "react";
import BasicInput from "../UI/BasicInput";
import { BsSearch } from "react-icons/bs";

function SearchContainer() {
  return (
    <div className="flex items-center w-full pr-40 text-2xl">
      <BasicInput
        placeHolderText="검색할 태그를 입력해 주세요..."
        classname="w-full"
      />
      <BsSearch />
    </div>
  );
}

export default SearchContainer;
