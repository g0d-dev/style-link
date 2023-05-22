import React from "react";
import PropTypes from "prop-types";

IconButton.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  onClickFn: PropTypes.func,
  iconType: PropTypes.string,
};

function IconButton({ children, classname, onClickFn, iconType }) {
  const buttonStyle = `${classname} text-black`;

  return (
    <>
      <button className={buttonStyle} onClick={onClickFn} type={iconType}>
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
