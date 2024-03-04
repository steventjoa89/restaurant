import React from "react";
import ButtonPrimary from "./ButtonPrimary";

function ButtonCategory({ text = "", active = false, onClick }) {
  return (
    <>
      {active ? (
        <ButtonPrimary text={text} onClick={onClick} />
      ) : (
        <button
          type="button"
          className="truncate text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2"
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default ButtonCategory;
