import React from "react";
import PropTypes from "prop-types";

import logo from "../../assets/logo.svg";

LogoImg.propTypes = {
  imgSrc: PropTypes.string,
  classname: PropTypes.string,
};

function LogoImg({ classname }) {
  return <img className={`w-52 ${classname}`} src={logo} />;
}

export default LogoImg;
