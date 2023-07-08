import React from "react";
import PropTypes from "prop-types";
import DropdownListItem from "./DropdownListItem";

DropdownList.propTypes = {
  searchResult: PropTypes.array,
  setSearchResult: PropTypes.func,
  setInputValue: PropTypes.func,
};

function DropdownList({ searchResult, setSearchResult, setInputValue }) {
  return (
    <div className="absolute w-2/3 bg-white border rounded-lg top-11">
      {searchResult.map((result, idx) => {
        return (
          <DropdownListItem
            key={idx}
            result={result}
            setSearchResult={setSearchResult}
            setInputValue={setInputValue}
          />
        );
      })}
    </div>
  );
}

export default DropdownList;
