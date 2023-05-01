import React from "react";
import PropTypes from "prop-types";

BasicButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

function BasicButton(props) {
  const { buttonText, classname, onClickFn } = props;

  const buttonStyle = `${classname} bg-black text-white py-1 px-2 w-28 rounded-lg`;

  return (
    <>
      <button onClick={onClickFn} className={buttonStyle}>
        {buttonText}
      </button>
    </>
  );
}

export default BasicButton;
