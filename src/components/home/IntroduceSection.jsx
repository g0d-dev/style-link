import React from "react";
import Reveal from "react-reveal/Reveal";
import mainPageImg1 from "../../assets/mainPageImg1.svg";
import mainPageImg2 from "../../assets/mainPageImg2.svg";
import detailPageImg from "../../assets/detailPageImg.svg";
import postPageImg1 from "../../assets/postPageImg1.svg";
import postPageImg2 from "../../assets/postPageImg2.svg";
import ResizeImg from "../UI/ResizeImg";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function IntroduceSection() {
  return (
    <>
      {introduceItem.map((item) => {
        return (
          <div className="mt-40" key={item.id}>
            <Reveal>
              <ResizeImg imgSrc={item.imgSrc} classname={item.classname} />
              <div className="flex justify-center mt-20 text-stone-500">
                <FaQuoteLeft />
                <p className="mx-3 text-lg">{item.p}</p>
                <FaQuoteRight />
              </div>
            </Reveal>
          </div>
        );
      })}
    </>
  );
}

const introduceItem = [
  {
    id: 1,
    imgSrc: mainPageImg1,
    classname: "-top-44",
    p: "당신의 멋진 패션을 마음껏 뽐내고, 정보를 공유하세요",
  },
  {
    id: 2,
    imgSrc: mainPageImg2,
    classname: "-top-12",
    p: "태그검색으로 좋아하는 패션을 찾으세요",
  },
  {
    id: 3,
    imgSrc: detailPageImg,
    classname: "-top-20",
    p: "상세정보와 착장정보 등을 확인하세요",
  },
  {
    id: 4,
    imgSrc: postPageImg1,
    classname: "-top-20",
    p: "오늘의 착장을 올리고 다양한 에피소드를 적어요",
  },
  {
    id: 5,
    imgSrc: postPageImg2,
    classname: "-top-20",
    p: "태그와 착장정보를 입력하여 회원들에게 정보를 알려주세요",
  },
];

export default IntroduceSection;
