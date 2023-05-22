import React from "react";
import PropTypes from "prop-types";

Dropdown.propTypes = {
  searchResult: PropTypes.array,
};

function Dropdown({ searchResult }) {
  return <div className="">{searchResult}</div>;
}

export default Dropdown;
