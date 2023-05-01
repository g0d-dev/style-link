import React from "react";
import PropTypes from "prop-types";

BasicInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
};

function BasicInput(props) {
  const { inputValue, placeHolderText, setInputValue, classname } = props;

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

export default BasicInput;
