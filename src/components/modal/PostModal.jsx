import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../UI/IconButton";
import { BsImage } from "react-icons/bs";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import TextAreaInput from "../UI/TextAreaInput";
import BasicInput from "../UI/BasicInput";
import BasicButton from "../UI/BasicButton";

function PostModal() {
  // textarea 인풋
  const [textInputValue, setTextInputValue] = useState("");
  const onTextAreaChangeHandler = (e) => {
    setTextInputValue(e.target.value);
  };

  // 기본 인풋
  const [inputValue, setInputValue] = useState("");
  const onChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  // 링크 인풋
  const [linkValue, setLinkValue] = useState("");
  const onChangeLinkHandler = (e) => {
    setLinkValue(e.target.value);
  };

  // 프로덕트 인풋
  const [productValue, setProductValue] = useState("");
  const onChangeProductHandler = (e) => {
    setProductValue(e.target.value);
  };

  // 사이즈 인풋
  const [sizeValue, setSizeValue] = useState("");
  const onChangeSizeHandler = (e) => {
    setSizeValue(e.target.value);
  };

  const navigator = useNavigate();
  const onSubmitHandler = () => {
    navigator("/");
  };
  const onUploadHandler = () => {
    navigator("/");
  };

  const [changePage, setChangePage] = useState(false);
  const onChangePageHandler = () => {
    setChangePage(!changePage);
  };

  return (
    <div className="relative w-full h-screen bg-black bg-opacity-80">
      <div className="flex items-center justify-center w-full h-[500px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 px-10">
        <IconButton
          onClickFn={onUploadHandler}
          iconType="button"
          classname="bg-[#f5f5f5] w-1/2 h-full flex flex-col justify-center items-center text-black text-opacity-50 rounded-l-3xl"
        >
          <BsImage className="text-9xl" />
          <span className="my-4 text-xl font-semibold">이미지 업로드하기</span>
          <div className="text-center ju">
            <p>이미지는 jpg,jpeg,png 확장자만 가능합니다.</p>
            <p>대표사진 1장만 업로드가 가능합니다.</p>
          </div>
        </IconButton>

        {!changePage ? (
          <div className="w-1/2 px-[6.25rem] bg-white h-full rounded-r-3xl relative">
            <form className="flex flex-col" onSubmit={onSubmitHandler}>
              <div className="flex flex-col">
                <label
                  htmlFor="contents"
                  className="text-lg font-light pt-[30px] pb-[10px]"
                >
                  Contents.
                </label>
                <TextAreaInput
                  inputId="contents"
                  placeHolderText="내용을 입력해 주세요..."
                  textInputValue={textInputValue}
                  onTextAreaChangeHandler={onTextAreaChangeHandler}
                  classname="pb-40"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="tags"
                  className="text-lg font-light pt-[30px] pb-[10px]"
                >
                  Tags.
                </label>
                <BasicInput
                  inputId="tags"
                  placeHolderText="태그를 작성 후 엔터를 입력해 주세요..."
                  inputValue={inputValue}
                  onChangeHandler={onChangeHandler}
                  classname=""
                />
              </div>
              <div className="pt-[30px] mx-auto">
                <BasicButton
                  buttonText="POST"
                  btnType="submit"
                  classname="mr-[10px] border-opacity-100"
                />
                <BasicButton
                  buttonText="CANCEL"
                  btnType="submit"
                  classname=""
                />
              </div>
            </form>
            <IconButton
              onClickFn={onChangePageHandler}
              iconType="button"
              classname="absolute right-10 top-1/2"
            >
              <RxArrowRight className="text-3xl" />
            </IconButton>
          </div>
        ) : (
          <div className="w-1/2 px-[6.25rem] bg-white h-full rounded-r-3xl relative">
            <form className="flex flex-col" onSubmit={onSubmitHandler}>
              <div className="flex flex-col">
                <label
                  htmlFor="infos"
                  className="text-lg font-light pt-[30px] pb-[10px]"
                >
                  Informations.
                </label>
                <p className="text-black text-opacity-50 pb-[30px]">
                  착용한 상품의 [구입 링크 / 상품명 / 구매 사이즈]를 공유할 수
                  있습니다
                </p>
                <div className="flex flex-col">
                  <BasicInput
                    inputId="info"
                    placeHolderText="Link..."
                    inputValue={linkValue}
                    onChangeHandler={onChangeLinkHandler}
                    classname=""
                  />
                  <BasicInput
                    inputId="info"
                    placeHolderText="Product..."
                    inputValue={productValue}
                    onChangeHandler={onChangeProductHandler}
                    classname=""
                  />
                  <BasicInput
                    inputId="info"
                    placeHolderText="Size..."
                    inputValue={sizeValue}
                    onChangeHandler={onChangeSizeHandler}
                    classname=""
                  />
                </div>
              </div>
              <div className="pt-[30px] mx-auto">
                <BasicButton
                  buttonText="POST"
                  btnType="submit"
                  classname="mr-[10px] border-opacity-100"
                />
                <BasicButton
                  buttonText="CANCEL"
                  btnType="submit"
                  classname=""
                />
              </div>
            </form>
            <IconButton
              onClickFn={onChangePageHandler}
              iconType="button"
              classname="absolute left-10 top-1/2"
            >
              <RxArrowLeft className="text-3xl" />
            </IconButton>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostModal;
