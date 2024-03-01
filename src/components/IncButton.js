import React from "react";

function IncButton({ isInc = true, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center w-7 h-7 text-xs font-semibold  text-white bg-black rounded-full"
    >
      {isInc ? "+" : "-"}
    </button>
  );
}

export default IncButton;
