import React from "react";
import PropTypes from "prop-types";
import DropdownListItem from "./DropdownListItem";

DropdownList.propTypes = {
  searchResult: PropTypes.array,
};

function DropdownList({ searchResult }) {
  return (
    <div className="absolute w-2/3 h-32 bg-white border rounded-lg top-11">
      {searchResult.map((result, idx) => {
        return <DropdownListItem key={idx} result={result} />;
      })}
    </div>
  );
}

export default DropdownList;
