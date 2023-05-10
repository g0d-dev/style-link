import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "../UI/IconButton";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";

ContentsListItem.propTypes = {
  person: PropTypes.array.isRequired,
};

export default function ContentsListItem({ person }) {
  const [isLiked, setIsLiked] = useState(person.isLiked);

  const likeToggleHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <li className="py-4 flex flex-col basis-1/5">
      <img src={person.image} alt="" className="object-cover rounded-lg" />
      <div className="flex justify-between items-center pt-[10px] ">
        <div className="flex justify-center items-center">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={person.avatar}
            alt=""
          />
          <p className="text-sm font-medium text-gray-900 pl-[10px]">
            {person.displayName}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <IconButton
            classname="text-2xl"
            onClickFn={likeToggleHandler}
            iconType="button"
          >
            {isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
          </IconButton>
          <span className="pl-[5px]">{isLiked ? 1 : 0}</span>
        </div>
      </div>
      <div className="pt-[10px]">{person.tags}</div>
    </li>
  );
}
