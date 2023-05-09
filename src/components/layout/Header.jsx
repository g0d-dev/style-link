import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import AuthBtnContainer from "../header/AuthBtnContainer";
import BasicButton from "../UI/BasicButton";
import SearchContainer from "../header/SearchContainer";
import PostModal from "../modal/PostModal";

function Header() {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(true);
  };
  return (
    <div className="relative w-full">
      <AuthBtnContainer />
      <div className="flex items-center px-10">
        <img className="w-52" src={logo} />
        <div className="flex justify-between w-full">
          <SearchContainer />
          <BasicButton
            classname=""
            buttonText="NEW POST"
            btnType="button"
            onClickFn={modalHandler}
          />
          {modal && <PostModal setModal={setModal} />}
        </div>
      </div>
    </div>
  );
}

export default Header;
