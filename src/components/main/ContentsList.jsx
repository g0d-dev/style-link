import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContents } from "../../store/modules/contents";
import BasicButton from "../UI/BasicButton";
import ContentsListItem from "./ContentsListItem";
import { fetchData } from "../../utils/fetchData";

function ContentsList() {
  const contents = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData("/newed", (data) => {
      dispatch(setContents(data));
    });
  }, [dispatch]);

  const [isSelectedFilter, setIsSelectedFilter] = useState([true, false]);

  const filterNewedHandler = () => {
    fetchData("/newed", (data) => {
      dispatch(setContents(data));
    });
    setIsSelectedFilter([true, false]);
  };

  const filterLikedHandler = () => {
    fetchData("/liked", (data) => {
      dispatch(setContents(data));
    });
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
        {contents &&
          contents.map((person, idx) => (
            <ContentsListItem key={idx} person={person} />
          ))}
      </ul>
    </div>
  );
}

export default ContentsList;
