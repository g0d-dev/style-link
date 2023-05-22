import React from "react";
import PropTypes from "prop-types";

TextAreaInput.propTypes = {
  placeHolderText: PropTypes.string,
  textInputValue: PropTypes.string,
  onTextAreaChangeHandler: PropTypes.func,
  classname: PropTypes.string,
  inputId: PropTypes.string,
};

function TextAreaInput({
  inputId,
  textInputValue,
  placeHolderText,
  onTextAreaChangeHandler,
  classname,
}) {
  const inputStyle = `${classname} border border-opacity-50 rounded-lg p-2.5 text-sm outline-none resize-none`;

  return (
    <textarea
      id={inputId}
      placeholder={placeHolderText}
      value={textInputValue}
      onChange={onTextAreaChangeHandler}
      className={inputStyle}
    />
  );
}

export default TextAreaInput;
