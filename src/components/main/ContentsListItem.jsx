import React, { useState } from "react";
import DetailModal from "../modal/DetailModal";
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

  const [openDetail, setOpenDetail] = useState(false);
  const openDetailHandler = () => {
    setOpenDetail(true);
  };

  return (
    <>
      {openDetail && (
        <DetailModal setOpenDetail={setOpenDetail} id={person.id} />
      )}
      <li className="flex flex-col px-4 basis-1/5">
        <button type="button" onClick={openDetailHandler}>
          <img src={person.image} alt="" className="object-cover rounded-lg" />
        </button>
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
          <div className="flex flex-wrap items-center justify-center space-x-2 w-15">
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
    </>
  );
}

export default ContentsListItem;
