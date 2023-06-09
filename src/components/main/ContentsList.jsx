import React, { useEffect, useState } from "react";
import BasicButton from "../UI/BasicButton";
import ContentsListItem from "./ContentsListItem";
import { fetchData } from "../utils/fetchData";

function ContentsList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData("/newed", setData);
  }, [setData]);

  const [isSelectedFilter, setIsSelectedFilter] = useState([true, false]);

  const filterNewedHandler = () => {
    fetchData("/newed", setData);
    setIsSelectedFilter([true, false]);
  };

  const filterLikedHandler = () => {
    fetchData("/liked", setData);
    setIsSelectedFilter([false, true]);
  };

  const classname =
    "px-2 border-none hover:underline hover:text-slate-800 text-slate-500";
  const selectedClassname = `text-slate-800 font-bold ${classname}`;

  const listItemFilter = [
    {
      id: 1,
      filterText: "최신순",
      onClickFn: filterNewedHandler,
    },
    {
      id: 2,
      filterText: "좋아요순",
      onClickFn: filterLikedHandler,
    },
  ];

  return (
    <div className="pt-28">
      <div className="ml-10">
        {listItemFilter.map((btn, idx) => {
          return (
            <BasicButton
              key={btn.id}
              classname={isSelectedFilter[idx] ? selectedClassname : classname}
              buttonText={btn.filterText}
              onClickFn={btn.onClickFn}
            />
          );
        })}
      </div>
      <ul className="flex flex-wrap px-10 py-10">
        {data.map((person) => (
          <ContentsListItem key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
}

export default ContentsList;
