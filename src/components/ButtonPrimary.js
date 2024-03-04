import React from "react";

function ButtonPrimary({
  text,
  disabled = false,
  px = 5,
  py = 2.5,
  mt = 0,
  mb = 0,
  me = 2,
  onClick,
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
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

export default ButtonPrimary;
