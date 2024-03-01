import React from "react";
import IncButton from "./IncButton";

function CounterButton({ count, onIncClick, onDecClick }) {
  return (
    <>
      <IncButton isInc={false} onClick={onDecClick} />
      <span className="inline-flex items-center justify-center w-8 h-7 font-bold text-sm">
        {count}
      </span>
      <IncButton onClick={onIncClick} />
    </>
  );
}

export default CounterButton;
