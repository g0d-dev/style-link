import React, { useState } from "react";
import AuthBtnContainer from "../header/AuthBtnContainer";
import BasicButton from "../UI/BasicButton";
import SearchBar from "../header/SearchBar";
import LogoImg from "../UI/LogoImg";
import PostModal from "../modal/PostModal";

function HeaderLayout() {
  const [openPost, setOpenPost] = useState(false);
  const openPostHandler = () => {
    setOpenPost(true);
  };
  return (
    <div className="fixed w-full py-2 bg-white">
      <AuthBtnContainer />
      <div className="flex items-center">
        <LogoImg />
        <SearchBar />
        <BasicButton
          classname="h-10 mr-7 w-52"
          buttonText="NEW POST"
          onClickFn={openPostHandler}
        />
        {openPost && <PostModal setOpenPost={setOpenPost} />}
      </div>
    </div>
  );
}

export default HeaderLayout;
