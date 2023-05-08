import React from "react";
import BasicInput from "../UI/BasicInput";
import { BsSearch } from "react-icons/bs";

function SearchContainer() {
  return (
    <div className="flex items-center text-2xl">
      <BasicInput
        placeHolderText="검색할 태그를 입력해 주새요"
        classname="h-10 mr-3 w-[30rem] ml-44"
      />
      <BsSearch />
    </div>
  );
}

export default SearchContainer;
