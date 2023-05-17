import React, { useState } from "react";
import { contents } from "../../mocks/contentsData";
import BasicButton from "../UI/BasicButton";
import ContentsListItem from "./ContentsListItem";

function ContentsList() {
  const [isFilterNewed, setIsFilterNewed] = useState(false);
  const filterNewedHandler = () => {
    setIsFilterNewed(!isFilterNewed);
    console.log(`최신순: ${isFilterNewed}`);
  };
  const [isFilterLiked, setIsFilterLiked] = useState(false);
  const filterLikedHandler = () => {
    setIsFilterLiked(!isFilterLiked);
    console.log(`좋아요순: ${isFilterLiked}`);
  };

  const classname =
    "px-2 border-none hover:underline hover:text-slate-800 text-slate-500";
  const listItemFilter = [
    {
      id: 1,
      classname,
      filterText: "최신순",
    },
    {
      id: 2,
      classname,
      filterText: "좋아요순",
    },
  ];
  return (
    <>
      <div className="ml-10">
        {listItemFilter.map((btn) => {
          return (
            <BasicButton
              key={btn.id}
              classname={btn.classname}
              buttonText={btn.filterText}
              onClickFn={
                btn.filterText === "최신순" && !isFilterLiked
                  ? filterNewedHandler
                  : filterLikedHandler
              }
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap px-10 py-10">
        {!isFilterNewed
          ? contents
              .filter((item) => item.id)
              .reverse()
              .map((person) => (
                <ContentsListItem key={person.id} person={person} />
              ))
          : contents
              .filter((item) => item.likedCount >= 0)
              .map((person) => (
                <ContentsListItem key={person.id} person={person} />
              ))}
      </ul>
    </>
  );
}

export default ContentsList;
