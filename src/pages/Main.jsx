import React, { useState } from "react";
import { BsSuitHeartFill, BsSuitHeart } from "react-icons/bs";
import IconButton from "../components/UI/IconButton";

const people = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1603217192766-e9db2d08a0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2535&q=80",
    displayName: "최영웅",
    isLiked: false,
    likedCount: 0,
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
    likedCount: 0,
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
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1588187284031-cb3fa95ebb27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    displayName: "이건희",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1587971315800-1fe31f4e9757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1571075002844-e5180c614639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    displayName: "윤복희",
    isLiked: false,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1623682536896-d519751f2726?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["#나이키", "#런닝복"],
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1603217040830-34473db521a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    displayName: "이금희",
    isLiked: true,
    likedCount: 0,
    avatar:
      "https://images.unsplash.com/photo-1588189408846-30ad110a0f4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG9vdGR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["#나이키", "#런닝복"],
  },
];

function Main() {
  const [isLiked, setIsLiked] = useState(people.isLiked);

  const likeToggleHandler = () => {
    setIsLiked(!isLiked);
  };

  return (
    <ul className="flex px-10 flex-wrap">
      {people.map((person) => (
        <li key={person.id} className="py-4 flex flex-col px-6 basis-1/4">
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
              <IconButton classname="elementType" onClickFn={likeToggleHandler}>
                {isLiked ? <BsSuitHeartFill /> : <BsSuitHeart />}
              </IconButton>
              <span className="pl-[5px]"></span>
            </div>
          </div>
          <div className="pt-[10px]">{person.tags}</div>
        </li>
      ))}
    </ul>
  );
}
export default Main;
