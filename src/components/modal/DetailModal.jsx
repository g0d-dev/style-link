import React from "react";
import { contents } from "../../mocks/contentsData";
import { CgClose } from "react-icons/cg";
import IconButton from "../UI/IconButton";
import { FiMoreVertical } from "react-icons/fi";

function DetailModal() {
  return (
    <div role="bg" className="fixed w-full h-full bg-black bg-opacity-80">
      <div className="flex items-center justify-center w-full h-[500px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 px-10 rounded-l-3xl">
        <div className="bg-[#ffffff] w-1/2 h-[500px] rounded-l-3xl border-r relative">
          <IconButton
            classname="text-2xl absolute top-5 left-5"
            iconType="button"
          >
            <CgClose />
          </IconButton>
          <img
            src={contents[0].image}
            className="object-scale-down w-full h-full"
          />
        </div>
        <div className="bg-[#ffffff] w-1/2 h-[500px] rounded-r-3xl relative">
          <IconButton
            classname="text-2xl absolute top-5 right-5"
            iconType="button"
          >
            <FiMoreVertical />
          </IconButton>
          <div className="flex items-center justify-start mb-10 px-10 pt-10">
            <img
              src={contents[2].avatar}
              className="object-cover w-10 h-10 rounded-full"
            />
            <p className="text-sm font-medium text-gray-900 pl-[10px]">
              {contents[0].displayName}
            </p>
          </div>
          <p role="contents" className="w-[500px] mb-10 px-10">
            스키니진 유행이 돌아온다길래 입어봤어요 호호 내 쇄골은 또 왜 이렇게
            이쁜지 모르겠네? 호호
          </p>

          <p role="tags" className="text-sky-500 mb-10 px-10">
            #블레이저 #스키니진 #쇄골
          </p>
          <div className="font-bold border-t pt-10 pb-5 px-10">착장정보</div>
          <p role="outfitInformationList" className="px-10">
            나이키 스포츠웨어 피닉스 플리스
            <span className="pl-3 text-slate-400">Size: M</span>
          </p>
          <p role="outfitInformationList" className="px-10">
            나이키 레볼루션 6
            <span className="pl-3 text-slate-400">Size: 240</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
