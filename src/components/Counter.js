import React from "react";
import IncButton from "./IncButton";

function Counter() {
  return (
    <>
      <IncButton isInc={false} />
      <span className="inline-flex items-center justify-center w-8 h-6 font-bold text-xs">
        0
      </span>
      <IncButton />
    </>
  );
}

export default Counter;
