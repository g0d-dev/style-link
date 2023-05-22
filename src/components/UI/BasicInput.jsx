import React from "react";
import PropTypes from "prop-types";

BasicInput.propTypes = {
  placeHolderText: PropTypes.string,
  inputValue: PropTypes.string,
  onChangeHandler: PropTypes.func,
  classname: PropTypes.string,
  inputId: PropTypes.string,
  name: PropTypes.string,
};
function BasicInput({
  name,
  inputId,
  inputValue,
  placeHolderText,
  onChangeHandler,
  classname,
}) {
  const InputStyle = `${classname}  border border-opacity-50 rounded-lg p-2.5 text-sm outline-none`;
  return (
    <input
      name={name}
      id={inputId}
      placeholder={placeHolderText}
      value={inputValue}
      onChange={onChangeHandler}
      className={InputStyle}
    />
  );
}

export default BasicInput;
