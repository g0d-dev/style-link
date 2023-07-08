import React, { useState } from "react";
import BasicInput from "../UI/BasicInput";
import { BsSearch } from "react-icons/bs";
import DropdownList from "./DropdownList";
import useDebounce from "../../hooks/useDebounce";
import { getSearchResult } from "../../api/getSearchResult";

function SearchBar() {
  const [searchResult, setSearchResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const debounce = useDebounce();

  const handleSearch = async (inputText, setFn) => {
    await getSearchResult(inputText, setFn);
  };

  const onChangeHandler = (e) => {
    const inputText = e.target.value;
    setInputValue(inputText);
    if (!inputText) setSearchResult([]);
    if (inputText) debounce(handleSearch, inputText, setSearchResult);
  };

  return (
    <div className="relative flex flex-wrap items-center justify-center w-full text-2xl">
      <BasicInput
        placeHolderText="검색할 태그를 입력해 주세요"
        classname="w-2/3 h-10 pl-4 mr-3 ml-9 focus:placeholder:text-white"
        onChangeHandler={onChangeHandler}
        inputValue={inputValue}
      />
      <BsSearch />
      {searchResult.length ? (
        <DropdownList
          searchResult={searchResult}
          setSearchResult={setSearchResult}
          setInputValue={setInputValue}
        />
      ) : null}
    </div>
  );
}

export default SearchBar;
