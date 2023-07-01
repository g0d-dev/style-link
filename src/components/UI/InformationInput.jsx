import React, { useRef } from "react";
import BasicInput from "./BasicInput";
import IconButton from "./IconButton";
import { FiPlus, FiMinus } from "react-icons/fi";
import PropTypes from "prop-types";

InformationInput.propTypes = {
  openPost: PropTypes.bool,
  openEdit: PropTypes.bool,
  person: PropTypes.object,
  inputList: PropTypes.array,
  setInputList: PropTypes.func,
};

function InformationInput({ setInputList, inputList, openPost, openEdit }) {
  const countNum = useRef(1);

  const inputChangeHandler = (e, idx) => {
    const { value, name } = e.target;
    console.log(e.target.name);
    setInputList((inputList) =>
      inputList.map((input, index) =>
        index === idx ? { ...input, [name]: value } : input
      )
    );
  };

  const addInputHandler = () => {
    if (inputList.length < 5) {
      const inputItem = {
        num: countNum.current,
        link: "",
        product: "",
        size: "",
      };
      setInputList((inputs) => [...inputs, inputItem]);
      countNum.current += 1;
    }
  };

  const removeInputHandler = (num) => {
    setInputList(inputList.filter((item) => item.num !== num));
  };

  return (
    <div className="flex flex-col flex-wrap items-center">
      {openPost &&
        inputList.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative flex items-center justify-between w-full mb-3"
            >
              <BasicInput
                name="link"
                inputId="infoLink"
                placeHolderText="Link..."
                inputValue={item.link || ""}
                onChangeHandler={(e) => inputChangeHandler(e, idx)}
                classname="mr-1 grow"
              />
              <BasicInput
                name="product"
                inputId="infoProduct"
                placeHolderText="Product..."
                inputValue={item.product || ""}
                onChangeHandler={(e) => inputChangeHandler(e, idx)}
                classname="mr-1"
              />
              <BasicInput
                name="size"
                inputId="infoSize"
                placeHolderText="Size..."
                inputValue={item.size || ""}
                onChangeHandler={(e) => inputChangeHandler(e, idx)}
                classname="mr-1"
              />
              {idx === 0 ? (
                <IconButton
                  onClickFn={addInputHandler}
                  iconType="button"
                  classname=""
                >
                  <FiPlus className="text-2xl" />
                </IconButton>
              ) : (
                <IconButton
                  onClickFn={() => removeInputHandler(item.num)}
                  iconType="button"
                  classname=""
                >
                  <FiMinus className="text-2xl" />
                </IconButton>
              )}
            </div>
          );
        })}
      {openEdit &&
        inputList.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative flex items-center justify-between w-full mb-3"
            >
              <BasicInput
                name="link"
                inputId="infoLink"
                placeHolderText="Link..."
                inputValue={item.link || ""}
                onChangeHandler={(e) => inputChangeHandler(e, idx)}
                classname="mr-1 grow"
              />
              <BasicInput
                name="product"
                inputId="infoProduct"
                placeHolderText="Product..."
                inputValue={item.product || ""}
                onChangeHandler={(e) => inputChangeHandler(e, idx)}
                classname="mr-1"
              />
              <BasicInput
                name="size"
                inputId="infoSize"
                placeHolderText="Size..."
                inputValue={item.size || ""}
                onChangeHandler={(e) => inputChangeHandler(e, idx)}
                classname="mr-1"
              />
              {idx === 0 ? (
                <IconButton
                  onClickFn={addInputHandler}
                  iconType="button"
                  classname=""
                >
                  <FiPlus className="text-2xl" />
                </IconButton>
              ) : (
                <IconButton
                  onClickFn={() => removeInputHandler(item.num)}
                  iconType="button"
                  classname=""
                >
                  <FiMinus className="text-2xl" />
                </IconButton>
              )}
            </div>
          );
        })}
    </div>
  );
}

export default InformationInput;
