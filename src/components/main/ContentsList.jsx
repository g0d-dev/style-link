import React, { useState } from "react";
import { contents } from "../../mocks/contentsData";
import BasicButton from "../UI/BasicButton";
import ContentsListItem from "./ContentsListItem";

function ContentsList() {
  const [contentList, setContentList] = useState(contents);

  const filterNewedHandler = () => {
    const newedContent = [...contentList].sort(
      (a, b) => b.createdAt - a.createdAt
    );
    setContentList(newedContent);
  };

  const filterLikedHandler = () => {
    const likedContent = [...contentList].sort(
      (a, b) => b.likedCount - a.likedCount
    );
    setContentList(likedContent);
  };

  const classname =
    "px-2 border-none hover:underline hover:text-slate-800 text-slate-500";
  const listItemFilter = [
    {
      id: 1,
      classname,
      filterText: "최신순",
      onClickFn: filterNewedHandler,
    },
    {
      id: 2,
      classname,
      filterText: "좋아요순",
      onClickFn: filterLikedHandler,
    },
  ];
  return (
    <div className="pt-28">
      <div className="ml-10">
        {listItemFilter.map((btn) => {
          return (
            <BasicButton
              key={btn.id}
              classname={btn.classname}
              buttonText={btn.filterText}
              onClickFn={btn.onClickFn}
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap px-10 py-10">
        {contentList.map((person) => {
          return <ContentsListItem key={person.id} person={person} />;
        })}
      </ul>
    </div>
  );
}

export default ContentsList;
