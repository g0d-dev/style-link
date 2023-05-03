import React from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import IconButton from "../components/UI/IconButton";

const people = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
    displayName: "최영웅",
    isLiked: false,
    avatar:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1587754539999-b5f5492704c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80",
    displayName: "이승미",
    isLiked: true,
    avatar:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1526540354-471ebff95055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
    displayName: "김용희",
    isLiked: false,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1526540354-471ebff95055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
    displayName: "김용희",
    isLiked: false,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1526540354-471ebff95055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
    displayName: "김용희",
    isLiked: false,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1526540354-471ebff95055?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1448&q=80",
    displayName: "김용희",
    isLiked: false,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
];

function Main() {
  return (
    <ul className="flex px-10 flex-wrap w-full">
      {people.map((person) => (
        <li
          key={person.id}
          className="py-4 flex flex-col px-6 w-full basis-1/4"
        >
          <div className="w-[15rem]">
            {/* 테일윈드 커스텀으로 할 거면 []안에 넣는다 */}
            <img src={person.image} alt="" className="object-cover" />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={person.avatar}
                alt=""
              />
              <p className="text-sm font-medium text-gray-900">
                {person.displayName}
              </p>
            </div>
            <div className="flex justify-center items-center">
              <IconButton>
                {person.isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
              </IconButton>
              <span>10</span>
            </div>
          </div>
          <div className="">{person.tags}</div>
        </li>
      ))}
    </ul>
  );
}
export default Main;
