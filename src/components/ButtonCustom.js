import React from "react";

function ButtonCustom({
  text,
  disabled = false,
  px = 5,
  py = 2.5,
  mt = 0,
  mb = 0,
  me = 0,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      // className={`       `}
      // className=" cursor-not-allowed   px-5 py-2.5 text-center"
      className={`text-white bg-yellow-${!disabled ? "400" : "200"} ${
        !disabled && "hover:bg-yellow-500"
      } ${
        !disabled && "focus:ring-yellow-300"
      }  font-medium rounded-lg text-sm text-center md:text-sm px-${px} py-${py} mt-${mt} mb-${mb} me-${me} ${
        disabled && "cursor-not-allowed"
      }`}
    >
      {text}
    </button>
  );
} // hover:bg-yellow-500 - focus:ring-yellow-300

export default ButtonCustom;
