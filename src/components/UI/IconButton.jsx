import React from "react";
import PropTypes from "prop-types";

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

function IconButton({ children, classname, onClickFn }) {
  const buttonStyle = `${classname} `;

  return (
    <>
      <button className={buttonStyle} onClick={onClickFn}>
        {children}
      </button>
    </>
  );
}

export default IconButton;

// import { IconName } from "react-icons/*";
// Heart:  BsSuitHeartFill, BsSuitHeart
// Search: BsSearch
// close: CgClose
// more: FiMoreVertical
// image: BsImage
// arrow: RxArrowLeft, RxArrowRight
// plus: FiPlus
// minus: FiMinus
