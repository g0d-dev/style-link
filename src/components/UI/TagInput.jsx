import React, { useState } from "react";
import IconButton from "../UI/IconButton";
import { CgClose } from "react-icons/cg";
import PropTypes from "prop-types";

TagInput.propTypes = {
  person: PropTypes.object,
  openPost: PropTypes.bool,
  openEdit: PropTypes.bool,
  tagList: PropTypes.array,
  setTagList: PropTypes.func,
};

function TagInput({ tagList, setTagList, openPost, openEdit }) {
  const [tagItem, setTagItem] = useState("");

  const addTagsHandler = (e) => {
    if (e.target.value.length < 9) {
      // 태그 글자 제한
      setTagItem(e.target.value);
    }
  };

  const keyPressHandler = (e) => {
    // 엔터키 누를시 태그 등록
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      // 태그 갯수 제한
      if (tagList.length < 3) setTagList([...tagList, tagItem]);
      setTagItem("");
      e.preventDefault();
    }
  };

  const removeTagItem = (item) => {
    const tags = tagList.slice();
    tags.splice(item, 1);
    setTagList(tags);
  };

  return (
    <div className="flex items-center justify-between border border-opacity-50 rounded-lg p-2.5 outline-none ">
      {openPost &&
        tagList.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-center px-2 mb-1 mr-2 border border-black cursor-pointer rounded-xl"
            >
              <span className="text-xs">{`#${item}`}</span>
              <IconButton
                onClickFn={() => removeTagItem(idx)}
                iconType="button"
                classname=""
              >
                <CgClose className="w-2 ml-1" />
              </IconButton>
            </div>
          );
        })}
      {openEdit &&
        tagList.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-wrap items-center justify-center px-2 mb-1 mr-2 border border-black cursor-pointer rounded-xl"
            >
              <span className="text-xs">{`#${item}`}</span>
              <IconButton
                onClickFn={() => removeTagItem(idx)}
                iconType="button"
                classname=""
              >
                <CgClose className="w-2 ml-1" />
              </IconButton>
            </div>
          );
        })}
      <input
        id="tags"
        placeholder="태그를 작성 후 엔터를 입력해 주세요..."
        value={tagItem}
        onChange={addTagsHandler}
        onKeyDown={keyPressHandler}
        className="text-sm outline-none grow"
      />
    </div>
  );
}

export default TagInput;
