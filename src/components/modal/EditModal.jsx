import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContents } from "../../store/modules/contents";
import IconButton from "../UI/IconButton";
import { BsImage } from "react-icons/bs";
import { RxArrowRight, RxArrowLeft } from "react-icons/rx";
import TextAreaInput from "../UI/TextAreaInput";
import BasicButton from "../UI/BasicButton";
import PropTypes from "prop-types";
import TagInput from "../UI/TagInput";
import InformationInput from "../UI/InformationInput";
import useEscapeKeyDown from "../../hooks/useEscapeKeyDown";
import baseInstance from "../../api";

EditModal.propTypes = {
  id: PropTypes.number,
  setOpenEdit: PropTypes.func,
  person: PropTypes.object,
  openEdit: PropTypes.bool,
};

function EditModal({ id, setOpenEdit, openEdit, person }) {
  const contents = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmitHandler = async (e) => {
    const editMessage = window.confirm("리얼 정말로 수정할거임?");
    e.preventDefault();
    if (editMessage) {
      const editBody = {
        id: person.id,
        displayName: person.displayName,
        isLiked: person.isLiked,
        likedCount: person.likedCount,
        createdAt: person.createdAt,
        avatar: person.avatar,
        spec: person.spec,
        image: person.image,
        contents: textInputValue,
        tags: tagList,
        information: inputList,
      };
      await baseInstance.patch(`/main/${id}`, editBody).then((res) => {
        const updatedContents = [...contents];
        updatedContents.splice(id, 1, res);
        dispatch(setContents(updatedContents));
      });
      setOpenEdit(false);

      // const editedContent = [...contents].splice(id, 1, editBody);
      // dispatch(setContents(editedContent));
    }
  };

  const btnClass = "w-24 py-1 hover:bg-black hover:text-white";

  // 페이지네이션
  const [changePage, setChangePage] = useState(false);
  const onChangePageHandler = () => {
    setChangePage(!changePage);
  };

  // 모달
  const modalCloseHandler = () => {
    setOpenEdit(false);
  };

  // 이미지 업로드
  const [imageFile, setImageFile] = useState(person.image);
  const imageRef = useRef();
  const imagePreviewHandler = () => {
    const file = imageRef.current.files[0];
    if (file) URL.revokeObjectURL(file);
    const url = URL.createObjectURL(file);
    setImageFile(url);
    console.log(url);
  };

  // contents 인풋
  const [textInputValue, setTextInputValue] = useState(person.contents);
  const onTextAreaChangeHandler = (e) => {
    setTextInputValue(e.target.value);
  };

  // tags 인풋
  const [tagList, setTagList] = useState(person?.tags || []);
  // const [tagList, setTagList] = useState((person && person.tags) || []); // 옵셔널 체이닝? 물음표 앞의 값이 undefined면 person.tags를 undefined로 리턴한다

  // informations 인풋
  const [inputList, setInputList] = useState(person?.information || [{}]);

  useEscapeKeyDown(setOpenEdit);

  return (
    <>
      <div className="flex items-center justify-center w-full h-[500px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 px-10 rounded-l-3xl">
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
            <form className="relative flex flex-col" onSubmit={onSubmitHandler}>
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
              <label
                htmlFor="tags"
                className="text-lg font-light pt-[30px] pb-[10px]"
              >
                Tags.
              </label>
              <TagInput
                person={person}
                openEdit={openEdit}
                tagList={tagList}
                setTagList={setTagList}
              />
              <div className="pt-[30px] mx-auto">
                <BasicButton
                  buttonText="EDIT"
                  btnType="submit"
                  classname={`${btnClass} mr-[10px] border-opacity-100 w-24 py-1`}
                  onClickFn={onSubmitHandler}
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
                  htmlFor="infoLink"
                  className="text-lg font-light pt-[30px] pb-[10px]"
                >
                  Informations.
                </label>
                <p className="text-black text-opacity-50 pb-[30px]">
                  착용한 상품의 [구입 링크 / 상품명 / 구매 사이즈]를 공유할 수
                  있습니다
                </p>
                <InformationInput
                  person={person}
                  openEdit={openEdit}
                  inputList={inputList}
                  setInputList={setInputList}
                />
              </div>
              <div className="pt-[30px] mx-auto">
                <BasicButton
                  buttonText="EDIT"
                  btnType="submit"
                  classname={`${btnClass} mr-[10px] border-opacity-100 w-24 py-1`}
                  onClickFn={onSubmitHandler}
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
    </>
  );
}

export default EditModal;
