import React from "react";
import BasicButton from "../UI/BasicButton";

function AuthBtnContainer() {
  return (
    <div className="flex justify-end mr-4">
      {AuthBtn.map((btn) => {
        return (
          <BasicButton
            key={btn.id}
            classname={btn.classname}
            buttonText={btn.buttonText}
          />
        );
      })}
    </div>
  );
}

const classname = "px-4 py-1 border-none rounded-none text-slate-500";
const AuthBtn = [
  {
    id: 1,
    classname,
    buttonText: "로그인",
  },
  {
    id: 2,
    classname,
    buttonText: "회원가입",
  },
];
export default AuthBtnContainer;
