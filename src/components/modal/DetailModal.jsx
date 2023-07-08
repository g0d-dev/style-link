import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setContents } from "../../store/modules/contents";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import IconButton from "../UI/IconButton";
import { FiMoreVertical } from "react-icons/fi";
import PropTypes from "prop-types";
import useEscapeKeyDown from "../../hooks/useEscapeKeyDown";
import BasicButton from "../UI/BasicButton";
import EditModal from "./EditModal";
import baseInstance from "../../api";

DetailModal.propTypes = {
  setOpenDetail: PropTypes.func,
  id: PropTypes.number,
  person: PropTypes.object,
  openDetail: PropTypes.bool,
  classname: PropTypes.object,
};

function DetailModal({ setOpenDetail, id, person, classname }) {
  const [openChangeDetail, setOpenChangeDetail] = useState(false);
  const openChangeDetailHandler = () => {
    setOpenChangeDetail(!openChangeDetail);
  };

  const [openEdit, setOpenEdit] = useState(false);
  const openEditHandler = () => {
    setOpenEdit(true);
  };

  const contents = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteHandler = async (e) => {
    const deleteMessage = window.confirm("리얼 정말로 삭제할거임?");
    e.preventDefault();
    if (deleteMessage) {
      await baseInstance.delete(`/main/${id}`);
      const filteredContents = contents.filter((content) => content.id !== id);
      dispatch(setContents(filteredContents));
    }
    setOpenDetail(false);
  };

  const contentsChange = [
    {
      id: 1,
      classname,
      text: "EDIT",
      onClickFn: openEditHandler,
    },
    {
      id: 2,
      classname,
      text: "DELETE",
      onClickFn: deleteHandler,
    },
  ];

  const modalCloseHandler = () => {
    setOpenDetail(false);
  };

  useEscapeKeyDown(setOpenDetail);

  return (
    <div
      role="bg"
      className="fixed w-full h-full -translate-x-1/2 -translate-y-1/2 bg-black top-1/2 left-1/2 bg-opacity-80"
    >
      {openEdit && (
        <EditModal
          id={person.id}
          setOpenEdit={setOpenEdit}
          openEdit={openEdit}
          person={person}
        />
      )}
      <div className="flex items-center justify-center w-full h-[500px] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 px-10 rounded-l-3xl">
        <div className="bg-[#ffffff] w-1/2 h-[500px] rounded-l-3xl border-r relative">
          <IconButton
            classname="absolute text-2xl top-5 left-5"
            iconType="button"
            onClickFn={modalCloseHandler}
          >
            <CgClose />
          </IconButton>
          <img src={person.image} className="object-scale-down w-full h-full" />
        </div>
        <div className="bg-[#ffffff] w-1/2 h-[500px] rounded-r-3xl relative">
          <div className="flex absolute top-[-38px] right-12 pt-10 mt-4">
            {openChangeDetail &&
              contentsChange.map((btn) => {
                return (
                  <BasicButton
                    key={btn.id}
                    buttonText={btn.text}
                    classname="px-2 py-1 ml-1"
                    onClickFn={btn.onClickFn}
                  />
                );
              })}
          </div>
          <IconButton
            classname="absolute text-2xl top-5 right-5"
            iconType="button"
            onClickFn={openChangeDetailHandler}
          >
            <FiMoreVertical />
          </IconButton>
          <div className="flex items-center justify-start px-10 pt-10 mb-10">
            <img
              src={person.avatar}
              className="object-cover w-10 h-10 rounded-full"
            />
            <p className="text-sm font-medium text-gray-900 pl-[10px]">
              {person.displayName}
            </p>
          </div>
          <p role="contents" className="w-[500px] mb-10 px-10">
            {person.contents}
          </p>

          <p role="tags" className="px-10 mb-10 text-sky-500">
            {person.tags.map((el) => `#${el} `)}
          </p>
          <div className="px-10 pt-10 pb-5 font-bold border-t">착장정보</div>
          {person.information.map((info, idx) => {
            return (
              <div key={idx} className="px-10">
                <Link to={info.link} target="_blank">
                  <span>{info.product}</span>
                </Link>
                <span className="pl-3 text-slate-400">Size: {info.size}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailModal;
