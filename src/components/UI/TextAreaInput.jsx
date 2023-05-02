import React from "react";
import PropTypes from "prop-types";

TextAreaInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
};

function TextAreaInput({
  inputValue,
  placeHolderText,
  setInputValue,
  classname,
}) {
  const InputStyle = `${classname} `;
  return (
    <>
      <input
        placeholder={placeHolderText}
        value={inputValue}
        onChange={(e) => setInputValue(e)}
        className={InputStyle}
      />
    </>
  );
}

export default TextAreaInput;
