import React from "react";
import PropTypes from "prop-types";

TextAreaInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  textInputValue: PropTypes.string.isRequired,
  onTextAreaChangeHandler: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};

function TextAreaInput(props) {
  const {
    inputId,
    textInputValue,
    placeHolderText,
    onTextAreaChangeHandler,
    classname,
  } = props;

  const inputStyle = `${classname} border border-opacity-50 rounded-lg p-2.5 text-sm outline-none resize-none`;

  return (
    <>
      <textarea
        id={inputId}
        placeholder={placeHolderText}
        value={textInputValue}
        onChange={onTextAreaChangeHandler}
        className={inputStyle}
      />
    </>
  );
}

export default TextAreaInput;
