import React from "react";

function ButtonPrimary({
  disabled = false,
  px = 5,
  py = 2.5,
  mt = 0,
  mb = 0,
  me = 2,
  onClick,
  rounded = false,
  additionalClassName = "",
  children,
}) {
  const pY = `py-${py}`;
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`text-white ${additionalClassName} ${
        !disabled ? "bg-yellow-400" : "bg-yellow-200"
      } ${!disabled && "hover:bg-yellow-500"} ${
        !disabled && "focus:ring-yellow-300"
      } font-medium ${
        !rounded ? "rounded-lg" : "rounded-full"
      } text-sm text-center md:text-sm px-${px} ${pY} mt-${mt} mb-${mb} me-${me} ${
        disabled && "cursor-not-allowed"
      }`}
    >
      {children}
    </button>
  );
} // hover:bg-yellow-500 - focus:ring-yellow-300

export default ButtonPrimary;
