import React from "react";
import AuthBtnContainer from "../header/AuthBtnContainer";
import BasicButton from "../UI/BasicButton";
import SearchBar from "../header/SearchBar";
import LogoImg from "../UI/LogoImg";

function HeaderLayout() {
  return (
    <div className="mt-2">
      <AuthBtnContainer />
      <div className="flex items-center">
        <LogoImg />
        <div className="flex justify-between w-full">
          <SearchBar />
          <BasicButton classname="h-10 mr-7" buttonText="NEW POST" />
        </div>
      </div>
    </div>
  );
}

export default HeaderLayout;
