import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "../UI/IconButton";
import { BsImage } from "react-icons/bs";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import { FiPlus } from "react-icons/fi";
import TextAreaInput from "../UI/TextAreaInput";
import BasicInput from "../UI/BasicInput";
import BasicButton from "../UI/BasicButton";
import PropTypes from "prop-types";
import TagInput from "../UI/TagInput";
// import TagInput from "../UI/TagInput";

PostModal.propTypes = {
  setModal: PropTypes.func,
};

function PostModal({ setModal }) {
  const btnClass = "w-24 py-1 hover:bg-black hover:text-white";
  const navigator = useNavigate();

  // 페이지네이션
  const [changePage, setChangePage] = useState(false);
  const onChangePageHandler = () => {
    setChangePage(!changePage);
  };

  // 모달
  const modalCloseHandler = () => {
    setModal(false);
  };

  // post 핸들러
  const onSubmitHandler = (e) => {
    e.preventDefault();
    navigator("/main");
  };

  // 인풋 추가 핸들러
  const onAddedHandler = (e) => {
    navigator("/");
  };

  // textarea 인풋
  const [textInputValue, setTextInputValue] = useState("");
  const onTextAreaChangeHandler = (e) => {
    setTextInputValue(e.target.value);
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

  // 이미지 업로드
  const [imageFile, setImageFile] = useState("");
  const imageRef = useRef();
  const imagePreviewHandler = () => {
    const file = imageRef.current.files[0];
    const reader = new FileReader();
    if (!file) return;
    reader.readAsDataURL(file);
    return new Promise(() => {
      reader.onload = () => {
        setImageFile(reader.result);
      };
    });
  };

  return (
    <div className="fixed w-full h-full -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2 bg-opacity-80">
      <div className="fixed z-10 flex items-center justify-center w-full px-10 -translate-x-1/2 -translate-y-1/2 h-1/2 top-1/2 left-1/2">
        {imageFile ? (
          <label
            htmlFor="uploadImage"
            className="bg-[#f5f5f5] w-1/2 h-full text-black text-opacity-50 rounded-l-3xl flex flex-col items-center justify-center cursor-pointer object-cover"
          >
            <img
              src={imageFile}
              alt="착장이미지"
              className="object-scale-down w-full h-full"
            />
          </label>
        ) : (
          <label
            htmlFor="uploadImage"
            className="bg-[#f5f5f5] w-1/2 h-full text-black text-opacity-50 rounded-l-3xl flex flex-col items-center justify-center cursor-pointer"
          >
            <BsImage className="text-9xl" />
            <span className="my-4 text-xl font-semibold">
              이미지 업로드하기
            </span>
            <div className="text-center">
              <p>이미지는 jpg,jpeg,png 확장자만 가능합니다.</p>
              <p>대표사진 1장만 업로드가 가능합니다.</p>
            </div>
          </label>
        )}

        <input
          type="file"
          accept="image/png,image/jpg,jpeg"
          id="uploadImage"
          onChange={imagePreviewHandler}
          ref={imageRef}
          className="hidden"
        />

        {!changePage ? (
          <div className="w-1/2 px-[6.25rem] bg-white h-full rounded-r-3xl relative">
            <div className="flex flex-col">
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
              <form
                className="relative flex flex-col"
                onSubmit={onSubmitHandler}
              >
                <label
                  htmlFor="tags"
                  className="text-lg font-light pt-[30px] pb-[10px]"
                >
                  Tags.
                </label>
                <TagInput />
              </form>
              <div className="pt-[30px] mx-auto">
                <BasicButton
                  buttonText="POST"
                  btnType="submit"
                  classname={`${btnClass} mr-[10px] border-opacity-100 w-24 py-1`}
                />
                <BasicButton
                  buttonText="CANCEL"
                  btnType="button"
                  classname={btnClass}
                  onClickFn={modalCloseHandler}
                />
              </div>
            </div>
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
                <div className="relative flex items-center justify-between w-full">
                  <BasicInput
                    inputId="infos"
                    placeHolderText="Link..."
                    inputValue={linkValue}
                    onChangeHandler={onChangeLinkHandler}
                    classname="mr-1 grow"
                  />
                  <BasicInput
                    inputId="info"
                    placeHolderText="Product..."
                    inputValue={productValue}
                    onChangeHandler={onChangeProductHandler}
                    classname="mr-1"
                  />
                  <BasicInput
                    inputId="info"
                    placeHolderText="Size..."
                    inputValue={sizeValue}
                    onChangeHandler={onChangeSizeHandler}
                    classname="mr-1"
                  />
                  <IconButton
                    onClickFn={onAddedHandler}
                    iconType="button"
                    classname=""
                  >
                    <FiPlus className="text-2xl" />
                  </IconButton>
                </div>
              </div>
              <div className="pt-[30px] mx-auto">
                <BasicButton
                  buttonText="POST"
                  btnType="submit"
                  classname={`${btnClass} mr-[10px] border-opacity-100 w-24 py-1`}
                />
                <BasicButton
                  buttonText="CANCEL"
                  btnType="button"
                  classname={btnClass}
                  onClickFn={modalCloseHandler}
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
