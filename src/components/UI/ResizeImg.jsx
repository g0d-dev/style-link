import React from "react";
import PropTypes from "prop-types";

ResizeImg.propTypes = {
  imgSrc: PropTypes.string,
  classname: PropTypes.string,
};

function ResizeImg({ imgSrc, classname }) {
  return (
    <div className="relative flex justify-center mb-10 overflow-hidden h-104">
      <img src={imgSrc} className={`w-3/4 absolute ${classname}`} />
    </div>
  );
}

export default ResizeImg;
