import React from "react";
import PropTypes from "prop-types";
import baseInstance from "../../api";

DropdownListItem.propTypes = {
  result: PropTypes.string,
};

function DropdownListItem({ result }) {
  const handleClick = async () => {
    const a = await baseInstance.get(`/main/search/${result}`);
    console.log(a);
  };
  return (
    <div className="mt-2 ml-2 text-sm cursor-pointer" onClick={handleClick}>
      {result}
    </div>
  );
}

export default DropdownListItem;
