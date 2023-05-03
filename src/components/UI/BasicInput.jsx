import React from "react";
import PropTypes from "prop-types";

BasicInput.propTypes = {
  placeHolderText: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired,
  classname: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
};

function BasicInput(props) {
  const { inputId, inputValue, placeHolderText, setInputValue, classname } =
    props;

  const InputStyle = `${classname}  border border-opacity-50 rounded-lg p-2.5 text-sm outline-none`;
  return (
    <>
      <input
        id={inputId}
        placeholder={placeHolderText}
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(e.target.value);
        }}
        className={InputStyle}
      />
    </>
  );
}

export default BasicInput;
