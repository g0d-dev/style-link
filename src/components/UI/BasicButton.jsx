import React from "react";
import PropTypes from "prop-types";

BasicButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};

function BasicButton({ buttonText, classname, onClickFn, btnType }) {
  const buttonStyle = `${classname} bg-white text-black border rounded-xl font-light text-sm text-center`;

  return (
    <>
      <button onClick={onClickFn} className={buttonStyle} type={btnType}>
        {buttonText}
      </button>
    </>
  );
}

export default BasicButton;
