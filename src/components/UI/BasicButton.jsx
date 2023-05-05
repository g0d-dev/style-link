import React from "react";
import PropTypes from "prop-types";

BasicButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classname: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
  btnType: PropTypes.string.isRequired,
};

function BasicButton({ buttonText, classname, onClickFn, btnType }) {
  const buttonStyle = `${classname} bg-white text-black border py-2 px-8 rounded-xl font-light text-sm text-center hover:bg-black hover:text-white`;

  return (
    <>
      <button onClick={onClickFn} className={buttonStyle} type={btnType}>
        {buttonText}
      </button>
    </>
  );
}

export default BasicButton;
