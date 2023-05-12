import React from "react";
import { contents } from "../../mocks/contentsData";
import BasicButton from "../UI/BasicButton";
import ContentsListItem from "./ContentsListItem";

function ContentsList() {
  const classname =
    "hover:underline hover:text-slate-800 border-none text-slate-500 px-2";
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
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap py-10 px-10">
        {contents.map((person) => (
          <ContentsListItem key={person.id} person={person} />
        ))}
      </ul>
    </>
  );
}

export default ContentsList;
