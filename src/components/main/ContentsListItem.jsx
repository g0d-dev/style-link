import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../UI/IconButton";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

ContentsListItem.propTypes = {
  person: PropTypes.array.isRequired,
};

function ContentsListItem({ person }) {
  const [isLiked, setIsLiked] = useState(person.isLiked);

  const likeToggleHandler = () => {
    setIsLiked(!isLiked);
  };

  return (

    <li className="flex flex-col py-4 basis-1/5">
      <img src={person.image} alt="" className="object-cover rounded-lg" />
      <div className="flex justify-between items-center pt-[10px] ">
        <div className="flex items-center justify-center">
          <img
            className="object-cover w-10 h-10 rounded-full"
            src={person.avatar}
            alt=""
          />
          <p className="text-sm font-medium text-gray-900 pl-[10px]">
            {person.displayName}
          </p>
        </div>
        <div className="flex flex-wrap items-center space-x-2 justify-center w-15">
          <IconButton
            classname="text-2xl text-red-500"
            onClickFn={likeToggleHandler}
            iconType="button"
          >
            {isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
          </IconButton>
          <span>{isLiked ? 1 : 0}</span>
        </div>
      </div>
      <div className="pt-[10px]">{person.tags}</div>
    </li>
  );
}

export default ContentsListItem;
