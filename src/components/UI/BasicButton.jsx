import React from "react";
import PropTypes from "prop-types";

BasicButton.propTypes = {
  buttonText: PropTypes.string,
  classname: PropTypes.string,
  onClickFn: PropTypes.func,
  btnType: PropTypes.string,
};

function BasicButton({ buttonText, classname, onClickFn, btnType }) {
  const buttonStyle = `${classname} bg-white text-black border rounded-xl text-sm text-center`;

  return (
    <>
      <button onClick={onClickFn} className={buttonStyle} type={btnType}>
        {buttonText}
      </button>
    </>
  );
}

export default BasicButton;
