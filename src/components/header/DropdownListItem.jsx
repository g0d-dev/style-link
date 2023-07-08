import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setContents } from "../../store/modules/contents";
import { fetchData } from "../../utils/fetchData";

DropdownListItem.propTypes = {
  result: PropTypes.string,
  setSearchResult: PropTypes.func,
  setInputValue: PropTypes.func,
};

function DropdownListItem({ result, setSearchResult, setInputValue }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    fetchData(`/main/search/${result}`, (data) => {
      dispatch(setContents(data));
    });
    setSearchResult([]);
    setInputValue("");
  };
  return (
    <div className="my-3 ml-4 text-sm cursor-pointer" onClick={handleClick}>
      {result}
    </div>
  );
}

export default DropdownListItem;
