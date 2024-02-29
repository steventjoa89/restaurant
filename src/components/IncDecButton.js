import React from "react";

function IncDecButton({ isInc = true }) {
  return (
    <button className="inline-flex items-center justify-center w-6 h-6 text-xs font-semibold  text-white bg-black rounded-full">
      {isInc ? "+" : "-"}
    </button>
  );
}

export default IncDecButton;
