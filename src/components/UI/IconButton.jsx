import React from "react";
import PropTypes from "prop-types";

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
  iconType: PropTypes.string.isRequired,
};

function IconButton(props) {
  const { children, classname, onClickFn, iconType } = props;

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
