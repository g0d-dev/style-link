import React, { useState } from "react";
import IconButton from "../UI/IconButton";
import { CgClose } from "react-icons/cg";

function TagInput() {
  const [tagItem, setTagItem] = useState("");
  const [tagList, setTagList] = useState([]);

  const addTagsHandler = (e) => {
    if (e.target.value.length < 9) setTagItem(e.target.value);
  };

  const keyPressHandler = (e) => {
    if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
      if (tagList.length < 3) setTagList([...tagList, tagItem]);
      setTagItem("");
    }
  };

  const removeTagItem = (item) => {
    const tags = tagList.slice();
    tags.splice(item, 1);
    setTagList(tags);
  };

  return (
    <div className="flex items-center justify-between border border-opacity-50 rounded-lg p-2.5 outline-none ">
      {tagList.map((item, idx) => {
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
