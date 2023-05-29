import React from "react";
import PropTypes from "prop-types";
import DropdownListItem from "./DropdownListItem";
import escapeKeyDown from "../../util/escapeKeyDown";

DropdownList.propTypes = {
  searchResult: PropTypes.array,
};

escapeKeyDown();

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
