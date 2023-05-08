import React from "react";
import logo from "../../assets/logo.svg";
import AuthBtnContainer from "../header/AuthBtnContainer";
import BasicButton from "../UI/BasicButton";
import SearchContainer from "../header/SearchContainer";

function Header() {
  return (
    <>
      <AuthBtnContainer />
      <div className="flex items-center">
        <img className="w-52" src={logo} />
        <div className="flex justify-between w-full">
          <SearchContainer />
          <BasicButton
            classname="h-10 text-white mr-7 hover:bg-white hover:text-black"
            buttonText="NEW POST"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
