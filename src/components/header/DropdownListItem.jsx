import React from "react";
import PropTypes from "prop-types";

DropdownListItem.propTypes = {
  result: PropTypes.string,
};

function DropdownListItem({ result }) {
  return <div className="mt-2 ml-2 text-sm cursor-pointer">{result}</div>;
}

export default DropdownListItem;
