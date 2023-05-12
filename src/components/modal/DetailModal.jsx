import React from "react";
// import { contents } from "../../mocks/contentsData";

function DetailModal() {
  return (
    <div className="fixed w-full h-full -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2 bg-opacity-80">
      <div className="flex items-center justify-center w-full h-[500px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 px-10">
        <div className="bg-[#f5f5f5] w-1/2 h-full text-black text-opacity-50 rounded-l-3xl flex flex-col items-center justify-center cursor-pointer object-cover"></div>
      </div>
    </div>
  );
}

export default DetailModal;
