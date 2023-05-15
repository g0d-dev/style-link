import React from "react";
import PropTypes from "prop-types";

BasicInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
