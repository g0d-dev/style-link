import React from "react";
import PropTypes from "prop-types";

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  classname: PropTypes.string.isRequired,
  onClickFn: PropTypes.func.isRequired,
};

function IconButton(props) {
  const { children, classname, onClickFn } = props;

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
